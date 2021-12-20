import React, { Component } from "react";
import G6 from "@antv/g6";
import "./style.less";

const data = {
  isRoot: true,
  id: "1-a",
  text: "循环衰减快",
  isC: true,
  children: [
    {
      id: "1-1-a",
      text: "初分析",
      isC: true,
      children: [
        {
          id: "1-1-1-a",
          text: "次分析1",
          isC: true,
          children: [
            {
              id: "1-1-1-1",
              text: "细分析1",
              children: [
                {
                  id: "1-1-1-1-1",
                  text: "异常主方向1",
                },
                {
                  id: "1-1-1-1-2",
                  text: "异常主方向2",
                },
                {
                  id: "1-1-1-1-3",
                  text: "异常主方向3",
                },
              ],
            },
            {
              id: "1-1-1-2-a",
              text: "细分析2",
              isC: true,
              children: [
                { id: "1-1-1-2-1", text: "异常主方向1" },
                {
                  id: "1-1-1-2-2-a",
                  text: "异常主方向2",
                  isC: true,
                  children: [
                    {
                      id: "1-1-1-2-2-1",
                      text: "失效机理1",
                    },
                    {
                      id: "1-1-1-2-2-2-a",
                      text: "失效机理2",
                      isC: true,
                      children: [
                        {
                          id: "1-1-1-2-2-2-1",
                          text: "具体失效机理1",
                        },
                        {
                          id: "1-1-1-2-2-2-2-a",
                          text: "具体失效机理2",
                          isC: true,
                          children: [
                            {
                              id: "1-1-1-2-2-2-2-1",
                              text: "伴随的现象1",
                            },
                            {
                              id: "1-1-1-2-2-2-2-2-a",
                              text: "伴随的现象2",
                              isC: true,
                              children: [
                                {
                                  id: "1-1-1-2-2-2-2-2-1",
                                  text: "排除类别1",
                                },
                                {
                                  id: "1-1-1-2-2-2-2-2-2-a",
                                  text: "排除类别2",
                                  isC: true,
                                  children: [
                                    {
                                      id: "1-1-1-2-2-2-2-2-2-1",
                                      text: "排除项目1",
                                    },
                                    {
                                      id: "1-1-1-2-2-2-2-2-2-2-a",
                                      text: "排除项目2",
                                      isC: true,
                                      children: [
                                        {
                                          id: "1-1-1-2-2-2-2-2-2-2-1-a",
                                          text: "人",
                                          isC: true,
                                        },
                                        {
                                          id: "1-1-1-2-2-2-2-2-2-2-2-a",
                                          text: "机",
                                          isC: true,
                                        },
                                        {
                                          id: "1-1-1-2-2-2-2-2-2-2-3-a",
                                          text: "料",
                                          isC: true,
                                        },
                                        {
                                          id: "1-1-1-2-2-2-2-2-2-2-4-a",
                                          text: "法",
                                          isC: true,
                                        },
                                        {
                                          id: "1-1-1-2-2-2-2-2-2-2-5-a",
                                          text: "环",
                                          isC: true,
                                        },
                                      ],
                                    },
                                    {
                                      id: "1-1-1-2-2-2-2-2-2-3",
                                      text: "排除项目3",
                                    },
                                  ],
                                },
                                {
                                  id: "1-1-1-2-2-2-2-2-3",
                                  text: "排除类别3",
                                },
                              ],
                            },
                            {
                              id: "1-1-1-2-2-2-2-3",
                              text: "伴随的现象3",
                            },
                          ],
                        },
                        {
                          id: "1-1-1-2-2-2-3",
                          text: "具体失效机理3",
                        },
                      ],
                    },
                    {
                      id: "1-1-1-2-2-3",
                      text: "失效机理3",
                    },
                  ],
                },
                { id: "1-1-1-2-3", text: "异常主方向3" },
              ],
            },
            {
              id: "1-1-1-3",
              text: "细分析3",
              children: [
                {
                  id: "1-1-1-3-1",
                  text: "异常主方向1",
                },
                {
                  id: "1-1-1-3-2",
                  text: "异常主方向2",
                },
              ],
            },
          ],
        },
        {
          id: "1-1-2",
          text: "次分析2",
          children: [
            {
              id: "1-1-2-1",
              text: "细分析1",
            },
            {
              id: "1-1-2-2",
              text: "细分析2",
            },
            {
              id: "1-1-2-3",
              text: "细分析3",
            },
          ],
        },
        {
          id: "1-1-3",
          text: "次分析3",
          children: [
            {
              id: "1-1-3-1",
              text: "细分析1",
            },
            {
              id: "1-1-3-2",
              text: "细分析2",
            },
          ],
        },
      ],
    },
  ],
};

class G6Graph extends Component {
  ref = React.createRef();

  componentDidMount() {
    this.init();
  }

  init = () => {
    let graph = new G6.TreeGraph({
      container: "mountNode",
      width: this.ref.current.width,
      height: this.ref.current.height,
      pixelRatio: 2,
      linkCenter: true,
      modes: {
        default: [
          {
            type: "collapse-expand",
            onChange: (item, collapsed) => {
              //   let data = item.get("model").data;
              //   data.collapsed = collapsed;
              //   return true;
            },
          },
          "drag-canvas",
          "zoom-canvas",
        ],
      },
      defaultNode: {
        size: 30,
        style: {
          fill: "#000",
          stroke: "#096dd9",
        },
      },
      defaultEdge: {
        type: "cubic-horizontal",
        style: {
          stroke: "#A3B1BF",
        },
      },
      layout: {
        type: "compactBox",
        direction: "LR",
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 50;
        },
        getHGap: function getHGap() {
          return 100;
        },
      },
    });

    graph.node(function (node) {
      if (node.isC) {
        return {
          size: 40,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
          style: {
            fill: "red",
            stroke: "#000",
          },
          label: node.text,
          labelCfg: {
            fill: "#000",
            position:
              node.children && node.children.length > 0 ? "left" : "right",
            style: {
              fill: "#000",
            },
          },
        };
      }

      return {
        size: 40,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
        style: {
          fill: "#40a9ff",
          stroke: "#000",
        },
        label: node.text,
        labelCfg: {
          position:
            node.children && node.children.length > 0 ? "left" : "right",
          style: {
            fill: "#000",
          },
        },
      };
    });

    graph.edge(function (edge) {
      if (edge.target.includes("a")) {
        return {
          style: {
            stroke: "red",
          },
        };
      }

      return {
        style: {
          stroke: "green",
        },
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();
  };

  render() {
    return <div className="G6Graph" id="mountNode" ref={this.ref}></div>;
  }
}

export default G6Graph;
