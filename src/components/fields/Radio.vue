<template>
    <div class="col-sm-6 col-md-4">
        <div class="form-check form-check-inline" v-for="radioType in types">
            <input class="form-check-input" type="radio" name="radio" @change="change(radioType)"/>
            <label class="form-check-label">{{radioType}}</label>
        </div>
        <div class="form-group">
            <label>Title for radio field</label>
            <input class="form-control" type="text" name="title" v-model="fields.title">
            <label>Name for radio field</label>
            <input class="form-control" type="text" name="name" v-model="fields.name">
            <label>Hidden?</label>
            <input class="form-control" type="checkbox" name="hidden" v-model="fields.hidden">
            <div v-if="customTitle" v-for="item in customFields">
                <label>Title for radio field</label>
                <input class="form-control" type="text" name="title" v-model="item.title">
            </div>

        </div>
        <div class="form-group" v-if="customTitle">
            <button class="btn btn-info" @click="addCustomFields">Add Titles</button>
        </div>
        <div class="form-group">
            <button class="btn btn-primary" @click="addField">Add Field</button>
        </div>
    </div>

</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Radio",
        data () {
            return {
                fields: {
                    type: "inputradio",
                    title: "",
                    name: "",
                    hidden: "",
                    items: [
                        {title : 'Yes'},
                        {title : 'No'}
                    ]
                },
                customTitle: false,
                types: ['default', 'custom'],
                customType: null
            }
        },
        methods: {
            ...mapActions([
                'updateType',
                'addFields',
                'addToCustomFields'
            ]),
            addField () {
                this.addFields({
                    title: this.fields.title,
                    name: this.fields.name,
                    type: this.fields.type,
                    hidden: this.fields.hidden,
                    items: this.customTitle ? this.customFields : this.fields.items
                })
            },
            change(value) {
                this.customType = value;
                this.updateType({
                    type: this.customType
                });
                switch(this.customType) {
                    case 'custom':
                        this.customTitle = true;
                        break;
                    case 'default':
                        this.customTitle = false;
                        break;
                }
            },
            addCustomFields() {
                this.addToCustomFields({
                    title: this.customFields.title
                })
            }
        },
        computed: {
            customFields() {
                return this.$store.getters.customFields;
            }
        }
    }
</script>

<style scoped>

</style>