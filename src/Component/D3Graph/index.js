import React, { Component } from "react";
import * as d3 from "d3";
import "./style.less";

class D3Graph extends Component {
  componentDidMount() {
    this.init();

    this.createGraph();
  }

  init = () => {
    /**
     * @description 初始化配置数据
     */
    this.forceSimulation = d3
      .forceSimulation()
      .force("link", d3.forceLink())
      .force("charge", d3.forceManyBody().strength(-1)) // 作用力应用在所用的节点之间，当strength为正的时候可以模拟重力，当为负的时候可以模拟电荷力。
      .force(
        "center",
        d3
          .forceCenter()
          .x(
            document.getElementById("mainGraph") &&
              document.getElementById("mainGraph").clientWidth / 2
          )
          .y(
            document.getElementById("mainGraph") &&
              document.getElementById("mainGraph").clientHeight / 2
          )
      ) // 力导向图中心位置
      .force("collision", d3.forceCollide(100)); // 设置节点碰撞半径>= 点半径避免重叠

    this.svg = d3
      .select("#mainGraph")
      .append("svg")
      .attr("id", "createEntityGraph")
      .attr(
        "width",
        document.getElementById("mainGraph") &&
          document.getElementById("mainGraph").clientWidth
      )
      .attr(
        "height",
        document.getElementById("mainGraph") &&
          document.getElementById("mainGraph").clientHeight
      );

    this.addPath = this.svg.append("g");
    this.edgeGroup = this.svg.append("g");
    this.nodeGroup = this.svg.append("g");
  };

  createGraph = () => {
    const { nodes, edges } = this.props;

    const zoomed = (event) => {
      const { transform } = event;

      this.edgeGroup.attr("transform", transform);
      this.nodeGroup.attr("transform", transform);
    };

    // 设置缩放
    const zoom = d3.zoom().scaleExtent([0.3, 3]).on("zoom", zoomed);

    // 添加图例dom节点svg
    this.svg.call(zoom).on("dblclick.zoom", null);

    // 点渲染
    this.forceSimulation.nodes(nodes).on("tick", this.tick);

    // 边渲染
    this.forceSimulation
      .force("link")
      .links(edges)
      .distance((d) => {
        return d.lineLength; // 边的长度
      });

    // 边
    this.edgeGroup
      .selectAll("line")
      .data(edges)
      .enter()
      .append("path")
      .attr("class", "link-node")
      .attr("id", (d, i) => {
        return `edgepath${d.edge_id}`;
      })
      .attr("stroke", (d) => {
        return d.color;
      });

    this.edgeGroup
      .selectAll("edgeText")
      .data(edges)
      .enter()
      .append("text")
      .attr("class", "edge-des")
      .attr("fill", (d, i) => {
        return "#242B45"; // 箭头字体颜色
      })
      .attr("font-size", 14); // 文字大小;

    // 边的描述
    this.edgeGroup
      .selectAll("edgeText")
      .data(edges)
      .enter()
      .append("text")
      .attr("class", "edge-des")
      .attr("fill", (d, i) => {
        return "#242B45"; // 箭头字体颜色
      })
      .append("textPath")
      .attr("xlink:href", (d, i) => {
        if (d.radius) {
          return "";
        }

        return `#edgepath${d.edge_id}`;
      })
      .text((d, i) => {
        return d.name;
      });

    // 节点
    this.nodeGroup
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", "graph-node")
      .attr("r", 20) // 节点大小
      .attr("fill", (d, i) => {
        return d.color;
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 4)
      .call(
        // 拖拽设置
        d3
          .drag()
          .on("start", this.started)
          .on("drag", this.dragged)
          .on("end", this.ended)
      );

    // 节点描述
    this.nodeGroup
      .selectAll("nodeText")
      .data(nodes)
      .enter()
      .append("text")
      .attr("class", "node-des")
      .text((d, i) => {
        return d.name;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", 14) // 文字大小
      .attr("fill", (d, i) => {
        return "#242B45";
      });
  };

  /**
   * @description 拖拽开始
   * @param {object} d 拖拽对象
   */
  started = (event, d) => {
    if (!event.active) {
      this.forceSimulation.alphaTarget(0.8).restart();
    }

    d.fx = d.x;
    d.fy = d.y;
  };

  /**
   * @description 拖拽中
   * @param {object} d 拖拽对象
   */
  dragged = (event, d) => {
    d.fx = event.x;
    d.fy = event.y;
  };

  /**
   * @description 拖拽结束
   * @param {object} d 拖拽对象
   */
  ended = (event, d) => {
    if (!event.active) {
      this.forceSimulation.alphaTarget(0);
    }

    // d.fx = null; // 节点拖拽结束后的位置，注释掉的话，节点位置会变
    // d.fy = null; // 节点拖拽结束后的位置，注释掉的话，节点位置会变
  };

  /**
   * @description 箭头(连接线的箭头)
   * @param {string} color 箭头颜色(使用16进制写法)
   */
  markerEnd = (color) => {
    this.svg
      .append("marker")
      .attr("id", `end${color}`)
      .attr("class", "no-delete-marker")
      .attr("markerUnits", "userSpaceOnUse")
      .attr("viewBox", "0 -5 10 10") // 坐标系的区域
      .attr("refX", 31) // 箭头在线上的坐标位置 X轴
      .attr("refY", 0) // Y轴
      .attr("markerWidth", 10) // 标识的大小
      .attr("markerHeight", 10)
      .attr("orient", "auto") // 绘制方向，可设定为：auto（自动确认方向）和 角度值
      .attr("stroke-width", 1.5) // 箭头宽度
      .append("path")
      .attr("d", "M0,-5L10,0L0,5") // 箭头的样式
      .attr("fill", color); // 箭头颜色

    return `url(#end${color})`;
  };

  markerStart = (color) => {
    this.svg
      .append("marker")
      .attr("id", `start${color}`)
      .attr("class", "no-delete-marker")
      .attr("markerUnits", "userSpaceOnUse")
      .attr("viewBox", "0 -5 10 10") // 坐标系的区域
      .attr("refX", -21) // 箭头在线上的坐标位置 X轴
      .attr("refY", 0) // Y轴
      .attr("markerWidth", 10) // 标识的大小
      .attr("markerHeight", 10)
      .attr("orient", "auto") // 绘制方向，可设定为：auto（自动确认方向）和 角度值
      .attr("stroke-width", 1.5) // 箭头宽度
      .append("path")
      .attr("d", "M0,0L10,-5L10,5") // 箭头的样式
      .attr("fill", color); // 箭头颜色

    return `url(#start${color})`;
  };

  markerRing = (color, refY) => {
    this.svg
      .append("marker")
      .attr("id", `ring${color}`)
      .attr("class", "delete-marker")
      .attr("markerUnits", "userSpaceOnUse")
      .attr("viewBox", "0 -5 10 10") // 坐标系的区域
      .attr("refX", 0) // 箭头在线上的坐标位置 X轴
      .attr("refY", refY) // Y轴
      .attr("markerWidth", 10) // 标识的大小
      .attr("markerHeight", 10)
      .attr("orient", "auto") // 绘制方向，可设定为：auto（自动确认方向）和 角度值
      .attr("stroke-width", 1.5) // 箭头宽度
      .append("path")
      .attr("d", "M0,0L10,-5L10,5") // 箭头的样式
      .attr("fill", color); // 箭头颜色

    return `url(#ring${color})`;
  };

  /**
   * @description 图谱渲染
   */
  tick = () => {
    this.nodeGroup.selectAll("circle").attr("transform", (d, i) => {
      return `translate(${d.x},${d.y})`;
    });

    this.nodeGroup.selectAll(".five-icon").attr("transform", (d, i) => {
      return `translate(${d.x - 9},${d.y - 9})`;
    });

    // 点上文字的位置
    this.nodeGroup
      .selectAll(".node-des")
      .attr("x", (d, i) => {
        return d.x;
      })
      .attr("y", (d, i) => {
        return d.y - 30;
      });

    // 线位置
    this.edgeGroup
      .selectAll(".link-node")
      .attr("d", (d) => {
        if (d.radius) {
          return `M${d.target.x} ${d.target.y} A ${d.radius} ${
            d.radius
          }, 0,1,1, ${d.target.x + 2 * d.radius} ${d.target.y} A ${d.radius} ${
            d.radius
          }, 0,1,1, ${d.target.x} ${d.target.y}`;
        }

        let dr = 0; // Math.random()*1000

        if (d.shirft < 2) {
          const dx = d.target.x - d.source.x; // 增量
          const dy = d.target.y - d.source.y;

          dr = d.shirft * Math.sqrt(dx * dx + dy * dy);
        }

        if (d.target.x > d.source.x) {
          return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
        }

        return `M${d.target.x},${d.target.y}A${dr},${dr} 0 0,0 ${d.source.x},${d.source.y}`;
      })
      .attr("marker-start", (d) => {
        if (d.radius) {
          return this.markerRing(d.color, -2 * d.radius);
        }

        if (!d.radius && d.source.x >= d.target.x) {
          return this.markerStart(d.color);
        }

        return null;
      })
      .attr("marker-end", (d) => {
        if (!d.radius && d.source.x < d.target.x) {
          return this.markerEnd(d.color);
        }

        return null;
      });

    // 边文字的位置
    this.edgeGroup
      .selectAll(".edge-des")
      .attr("x", (d) => {
        if (d.radius) {
          return d.target.x + 2 * d.radius - 30;
        }

        const dx = Math.abs(d.source.x - d.target.x);
        const dy = Math.abs(d.source.y - d.target.y);

        const temp = d.name + d.alias;

        let wordShirft = temp.length * 4;

        if (temp.length > 15) {
          wordShirft = 60;
        }

        return Math.sqrt(dx * dx + dy * dy) / 2 - wordShirft;
      })
      .attr("y", (d) => {
        if (d.radius) {
          if ((d.radius / 50) % 2 === 0) {
            return d.target.y + 50;
          }

          return d.target.y - 50;
        }

        // return (d.source.y + d.target.y) /2;

        return 0;
      })
      .attr("transform", (d) => {
        // 在Y轴上点偏移量
        if (d.source.x < d.target.x) {
          return "translate(0,-5)";
        }

        return "translate(0,5)";
      })
      .attr("dominant-baseline", (d) => {
        if (d.source.x < d.target.x) {
          return "text-after-edge";
        }

        return "text-before-edge";
      });

    if (this.forceSimulation.alpha() <= 0.3) {
      // 固定节点位置
      this.nodeGroup.selectAll("circle").attr("transform", (d, i) => {
        d.fx = d.x;
        d.fy = d.y;

        return `translate(${d.x},${d.y})`;
      });

      this.forceSimulation.stop();
    }
  };

  render() {
    return <div id="mainGraph"></div>;
  }
}

export default D3Graph;
