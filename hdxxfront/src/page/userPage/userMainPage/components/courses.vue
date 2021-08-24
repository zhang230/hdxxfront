<template>
  <div
    style="
      width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 50px;
    "
  >

    <div>
      <!-- 动态导航
         <el-menu
        default-active="1"
        v-for="(menu,index)in category"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item :index="menuIndex">{{ menu.category }}</el-menu-item>
      </el-menu> -->
      <el-tabs type='border-card' v-model="category" @tab-click="handleClick">
        <el-tab-pane label="前端开发" name="first">前端开发</el-tab-pane>
        <el-tab-pane label="数据库" name="second">数据库</el-tab-pane>
        <el-tab-pane label="JavaSE" name="third">JavaSE</el-tab-pane>
        <el-tab-pane label="综合应用" name="fourth">综合应用</el-tab-pane>
        <el-tab-pane label="信息安全" name="fifth">信息安全</el-tab-pane>
        <el-tab-pane label="Spring" name="sixth">Spring</el-tab-pane>
        <el-tab-pane label="jQuery" name="seventh">jQuery</el-tab-pane>
      </el-tabs>
    </div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="课程名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="课程来源">
                <span>{{ props.row.origin }}</span>
              </el-form-item>
              <el-form-item label="课程分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="创建时间">
                <span>{{ props.row.course_time }}</span>
              </el-form-item>
              <el-form-item label="上次学习">
                <span>{{ props.row.last_study_time }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.course_grade }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <!-- 插入图片 -->
        <el-table-column label="   " prop="photo">
          <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit">
              <!-- <span class="demonstration">{{ fit }}</span> -->
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"
              ></el-image>
            </div>
          </div>
        </el-table-column>
        <el-table-column label="课程名" prop="name"> </el-table-column>
        <el-table-column label="操作">
          <div>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-reading"
              @click="startCourse()"
              >开课</el-button
            >
            <el-button
              type="primary"
              size="small"
              icon="el-icon-edit"
              @click="takeNote()"
              >笔记</el-button
            >
          </div>
          <div class="course-rate">
            <el-rate style="margin-right: 10px" v-model="value" show-text>
            </el-rate>
          </div>
          <!-- <span>{{props.row.course_grade}}</span> -->
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

 
  </div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      value: null,
      fits: ["cover"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      activeName: "second",
      category: [
        "前端开发",
        "数据库",
        "JavaSE",
        "综合应用",
        "信息安全",
        "Spring",
        "jQuery",
      ],
      tableData: [
        {
          id: "12987122",
          name: "计算机二级",
          category: "c++",
          origin: "公共免费课",
          course_time: "2020-01-01",
          last_study_time: "2020-03-03",
          course_grade: 4.5,
        },
        {
          id: "12987122",
          name: "计算机二级",
          category: "c++",
          origin: "公共免费课",
          course_time: "2020-01-01",
          last_study_time: "2020-03-03",
          course_grade: 3.5,
        },
        {
          id: "12987122",
          name: "计算机二级",
          category: "c++",
          origin: "公共免费课",
          course_time: "2020-01-01",
          last_study_time: "2020-03-03",
          course_grade: 4.5,
        },
        {
          id: "12987122",
          name: "计算机二级",
          category: "c++",
          origin: "公共免费课",
          course_time: "2020-01-01",
          last_study_time: "2020-03-03",
          course_grade: 4.5,
        },
      ],
    };
  },
  methods: {
    startCourse() {},
    takeNote() {},
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}


</style>