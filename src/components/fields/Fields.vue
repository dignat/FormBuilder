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
    import TextComponent from './TextComponent'
    import Location from './Location'
    import Radio from './Radio'
    import MainRepeater from './MainRepeater'
    export default {
        name: "Fields",
        components: {
            appText: TextComponent,
            appLocation: Location,
            appRepeater: MainRepeater
        },
        data () {
            return {
                types: ['inputtext', 'inputlocation', 'inputradio', 'inputrepeat'],
                currentType: null,
                currentFieldType: null,
                partOfStructure: true
            }
        },
        methods: {
            ...mapActions([
                'updateFieldType',
                'updateType',
                'updateComplexStructure'
            ]),
            changeType(value) {
                this.currentType = value;
                this.updateType({
                    type: this.currentType
                });
                switch (this.currentType) {
                    case 'inputtext':
                        this.currentFieldType = TextComponent;
                        break;
                    case 'inputlocation':
                        this.currentFieldType = Location;
                        break;
                    case 'inputradio':
                        this.currentFieldType = Radio;
                        break;
                    case 'inputrepeat':
                        this.currentFieldType = MainRepeater;
                        break
                }
                this.updateFieldType({
                    fieldType: this.currentFieldType,
                });
                this.updateComplexStructure({
                    structure: true
                })
            }
        },
    }
</script>

<style scoped>

</style>