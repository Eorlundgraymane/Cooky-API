export default {
    findByPk: async (Model, Pk, extended = false, nested = false) => {
        let params = {};
        if (extended) {
            params.include = {};
            params.include.all = true;
            if (nested) {
                params.include.nested = true;
            }
        }
        let result = await Model.findByPk(Pk, params);
        return result;
    },
    findAll: async (Model, params, extended = false, nested = false) => {
        if (extended) {
            params.include = {};
            params.include.all = true;
            if (nested) {
                params.include.nested = true;
            }
        }
        let result = await Model.findAll(params);
        return result;
    },
    findOne: async (Model, params, extended = false, nested = false) => {
        console.log(extended);
        if (extended) {
            params.include = {};
            params.include.all = true;
            if (nested) {
                params.include.nested = true;
            }
        }
        console.log("HIT");
        console.log(params);
        let result = await Model.findOne(params);
        return result;
    },
    create: async (Model, params) => {
        let result = {};
        result = await Model.create(params);
        return result;
    },
    update: async (Model, values, options) => {
        let result = {};
        result = Model.update(values, options);
        return result;
    },
    delete: async (Model, params) => {
        let result = {};
        result = Model.destroy(params);
        return result;
    }
}