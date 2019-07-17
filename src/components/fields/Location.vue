<template>
        <div class="col-sm-6 col-md-4">
            <div class="form-group">
            <label class="form-control-label">Title for location field</label>
            <input class="form-control" type="text" name="title" v-model="fields.title"/>
            <label class="form-control-label">Name for location field</label>
            <input class="form-control" type="text" name="name" v-model="fields.name"/>
            <label class="form-control-label">Minute for location field</label>
            <input class="form-control" type="number" name="minute" v-model="fields.minute"/>
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
        name: "Location",
        data () {
            return {
                fields: {
                    type: "inputlocation",
                    title: '',
                    name: '',
                    minute: 0
                }
            }
        },
        methods: {
            ...mapActions([
                'addFields'
            ]),
            addField() {
                this.addFields({
                    type: this.fields.type,
                    name: this.fields.name,
                    title: this.fields.title,
                    minute: this.fields.minute
                });
            }

        }

    }
</script>

<style scoped>

</style>