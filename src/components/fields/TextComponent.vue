<template>
    <div class="col-sm-6 col-md-4">
        <div class="form-group">
        <label>Title for text field</label>
        <input class="form-control" type="text" name="title" v-model="fields.title">
        <label>Name for text field</label>
        <input class="form-control" type="text" name="name" v-model="fields.name">
        <label>Limit for text field</label>
        <input class="form-control" type="number" name="limit" v-model="fields.limit">
        <label>Hidden ?</label>
        <input class="form-control" type="checkbox" name="hidden" v-model="fields.hidden">
        <label>Required ?</label>
        <input class="form-control" type="checkbox" name="required" v-model="fields.required">
        <label>Enabled ?</label>
        <input class="form-control" type="checkbox" name="enabled" v-model="fields.enabled">
        <label>Default</label>
        <input class="form-control" type="text" name="default" v-model="fields.default">
    </div>
        <div class="form-group">
            <div class="col-sm-10">
                <button class="btn btn-primary" @click="addField">Add Field</button>
            </div>
        </div>
    </div>

    
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "TextComponent",
        data () {
            return {
                fields: {
                    type: 'inputtext',
                    name: '',
                    title: '',
                    limit: 255,
                    hidden: false,
                    required: false,
                    enabled: false,
                    default: ''
                }

            }
        },
        methods: {
            ...mapActions([
                'addFields',
            ]),
            addField() {
                this.addFields({
                    type: this.fields.type,
                    name: this.fields.name,
                    title: this.fields.title
                })
            }
        }
    }
</script>

<style scoped>

</style>