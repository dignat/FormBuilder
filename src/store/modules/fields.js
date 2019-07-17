const state = {
    items: [],
    currentFieldType: null,
    currentType: null,
    customFields: [],
    form: {}
};

const mutations= {
    'ADD_FIELDS' (state, data) {
        state.items.push(Object.assign({}, data));
    },
    'UPDATE_FIELD_TYPE'(state, currentFieldType) {
        state.currentFieldType = currentFieldType;
        console.log(currentFieldType);
    },
    'UPDATE_TYPE'(state, currentType) {
        state.currentType = currentType;
        console.log(currentType)
    },
    'ADD_TO_BUILD_FIELDS'(state, data) {
        state.form = {
            type: data.type,
            name: data.name,
            title: data.title,
            items: state.items
        };
    },
    'ADD_TO_CUSTOM_FIELDS' (state, data) {
        state.customFields.push(Object.assign({}, data));
    },
    'DELETE_FIELDS' (state) {
        state.items.pop();
    }

};

const actions = {
    addFields: ({commit}, data) => {
        commit('ADD_FIELDS', data);
    },
    updateFieldType: ({commit}, fieldType) => {
        commit('UPDATE_FIELD_TYPE', fieldType);
    },
    updateType: ({commit}, type) => {
        commit('UPDATE_TYPE', type);
    },
    addToBuildFields: ({commit}, data) => {
        commit('ADD_TO_BUILD_FIELDS', data)
    },
    addToCustomFields: ({commit}, data) => {
        commit('ADD_TO_CUSTOM_FIELDS', data)
    },
    deleteFields: ({commit}) => {
        commit('DELETE_FIELDS')
    }
};

const getters = {
    form: state => state.form,
    customFields: state => state.customFields,
};

export default {
    state,
    mutations,
    actions,
    getters
}