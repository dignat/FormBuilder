<template>
    <div class="content">
        <div class="form-check form-check-inline" v-for="fieldType in types">
            <input class="form-check-input" type="radio" name="radio" id="radio" @change="changeType(fieldType)"/>
            <label class="form-check-label" for="radio">{{ fieldType }}</label>
        </div>
            <component :is="currentFieldType"></component>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import TextComponent from './fields/TextComponent'
    import Location from './fields/Location'
    import Radio from './fields/Radio'
    export default {
        name: "Form",
        props: ['item'],
        components: {
            appText: TextComponent,
            appLocation: Location
        },
        data () {
            return {
                types: ['inputtext', 'inputlocation', 'inputradio'],
                currentType: null,
                currentFieldType: null,
            }
        },
        methods: {
            ...mapActions([
                'updateFieldType',
                'updateType',
            ]),

            changeType (value) {
                this.currentType = value;
                this.updateType( {
                    type: this.currentType
                });
                switch(this.currentType) {
                    case 'inputtext':
                        this.currentFieldType = TextComponent;
                        break;
                    case 'inputlocation':
                        this.currentFieldType = Location;
                        break;
                    case 'inputradio':
                        this.currentFieldType = Radio;
                        break;
                }
                this.updateFieldType({
                    fieldType : this.currentFieldType
                });

            }

        },
    }
</script>

<style scoped>

</style>