<template>
    <div class="register-container">
        <Card>
           <p slot="title">欢迎您注册!</p>
           <Form :model="registerForm">
            <FormItem>
                <Input v-model="registerForm.input" size="large" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
                <Input v-model="registerForm.input" size="large" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
                <Input v-model="registerForm.input" size="large" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
                <Input v-model="registerForm.input" size="large" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
            <p style="display: flex; justify-content: space-between">
                <Button type="primary" size="large">提交</Button>
                <Button type="warning" size="large" style="margin-left: 8px">重置</Button>
            </p>
        </FormItem>
            </Form>
        </Card>
     </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        input: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.register-container {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

</style>
