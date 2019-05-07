module.exports = {
  name: 'flow-2-stage-1',
  layout: 'left-right-container',
  blocks: [
    {
      type: 'block-pentos',
      data: {},
      container: 'left-container',
      slot: {
        style: "height: 200px"
      },
      rootProps: {
        image: 'https://images.news18.com/ibnlive/uploads/2019/01/Captain-America.jpg'
      }
    },
    {
      type: 'block-pentos',
      data: {},
      container: 'left-container',
      slot: {
        style: "height: 300px"
      },
    },
    {
      type: 'block-orca',
      data: {},
      container: 'left-container',
      slot: {
        style: "height: 150px"
      },
    },
    {
      type: 'block-pentos',
      data: {},
      container: 'left-container',
      slot: {
        style: "height: 400px"
      }
    },
    {
      type: 'block-pentos',
      data: {},
      container: 'right-container',
      slot: {
        style: "height: 150px"
      },
      rootProps: {
        image: 'https://img.cinemablend.com/filter:scale/quill/f/4/c/7/2/8/f4c7285138674b054d01d8a4d9a8293dcc631e89.jpg?mw=600'
      }
    },
    {
      type: 'block-pentos',
      data: {},
      container: 'right-container',
      slot: {
        style: "height: 200px"
      },
    },
    {
      type: 'block-pentos',
      data: {},
      container: 'right-container',
      slot: {
        style: "height: 800px"
      }
    },
    {
      type: 'block-orca',
      data: {},
      container: 'right-container',
      slot: {
        style: "height: 200px"
      }
    }
  ],
}