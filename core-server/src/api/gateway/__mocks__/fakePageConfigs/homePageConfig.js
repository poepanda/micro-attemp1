module.exports = {
  name: 'Home',
  layout: 'left-right-container',
  blocks: [
    {
      type: 'block-pentos',
      data: {},
      container: 'left-container',
      slot: {
        style: "height: 200px"
      },
    },
    {
      type: 'block-pentos',
      data: {},
      container: 'left-container',
      slot: {
        style: "height: 300px"
      }
    },
    {
      type: 'block-orca',
      data: {},
      container: 'left-container',
      slot: {
        style: "height: 150px"
      }
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
      }
    },
    {
      type: 'block-pentos',
      data: {},
      container: 'right-container',
      slot: {
        style: "height: 200px"
      }
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