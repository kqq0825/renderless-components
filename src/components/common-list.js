export default {
  name: "common-list",
  props: {
    value: Array,
  },
  render() {
    return (
      <ul>
        {this.value.map((item) => {
          return (
            <el-card class="box-card" key={item.text}>
              {/* <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              /> */}
              <div style="padding: 14px;">
                <span>{item.text}</span>
              </div>
            </el-card>
          );
        })}
      </ul>
    );
  },
};
