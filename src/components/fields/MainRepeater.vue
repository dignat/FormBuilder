<template>
    <div class="col-sm-8">
        <div class="form-group">
            <label class="form-control-label">Repeater Name</label>
            <input class="form-control" type="text" name="name"  v-model="fields.name">
            <label class="form-control-label">Repeater Title</label>
            <input class="form-control" type="text" name="title" v-model="fields.title">
        </div>
        <div class="form-group" v-for="item in buildArray">
            <app-fields></app-fields>
        </div>
      <div class="form-group">
        <button class="btn  btn-primary" @click="addMoreFields">Add More Fields</button>
      </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="addField">Add Repeater</button>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Fields from './Fields'
    export default {
        name: "MainRepeater",
        components: {
            appFields:Fields
        },
        data () {
            return {
                fields: {
                    type: 'inputrepeat',
                    name: '',
                    title: '',
                    items: []
                },
                buildArray: []
            }

        },
        methods: {
            ...mapActions([
                'addRepeaterFields',
                'addFields'
            ]),
            addField() {
              this.addFields({
                  type: this.fields.type,
                  name: this.fields.name,
                  title: this.fields.title,
                  items: this.repeaterItems
              })
            },
            addMoreFields() {
              this.buildArray.push(this.fields)
            },
            addToRepeater() {
                this.addRepeaterFields({
                    type: this.fields.type,
                    name: this.fields.name,
                    title: this.fields.title
                });
            }
        },
        computed: {
            repeaterItems() {
                return this.$store.getters.repeaterItems;
            },
            partOfStructure() {
                return this.$store.getters.partOfStructure.structure
            }
        },
    }
</script>

<style scoped>

</style>
