<template>
  <div class="container">
    <label class="form-control-label">Form title</label>
    <input class="form-control" type="text" name="title" v-model="form.title"/>
    <label class="form-control-label">Form name</label>
    <input class="form-control" type="text" name="name" v-model="form.name"/>
    <app-form></app-form>
    <div class="form-group">
      <div class="col-sm-10">
        <button class="btn btn-danger" @click="addMoreFields">Generate Form</button>
        <button class="btn btn-danger" @click="removeField" :disabled="buildItems.items === undefined">Remove Field</button>
      </div>
    </div>
    <div class="row">
      <textarea rows="40" cols="255">{{JSON.stringify(buildItems, null, '\t')}}</textarea>
    </div>
  </div>
</template>

<script>
import Form from './components/Form'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    appForm: Form
  },
  data () {
    return {
      form: {
        type: "form",
        name: '',
        title: '',
        items: []
      }
    }
  },
  methods: {
    ...mapActions([
            'addToBuildFields',
            'deleteFields'
    ]),
    addMoreFields() {
      const form = {
        type: this.form.type,
        name: this.form.name,
        title: this.form.title,
        items: this.form.items
      };
      this.addToBuildFields(form)
    },
    removeField() {
      this.deleteFields({
        items: this.form.items
      });
    },
  },
  computed: {
    buildItems() {
      return this.$store.getters.form
    }
  }
}
</script>

<style>
  body{
    padding: 30px;
  }

</style>
