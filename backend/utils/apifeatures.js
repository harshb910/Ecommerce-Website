class ApiFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i', //case insensitive
            }
        } : {};
        // console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;
    }
    filter(){
        const queryCopy = {...this.queryStr}; //copy the queryStr object

        // console.log(queryCopy);
        //Remove Some fields for category query
        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach(key=> delete queryCopy[key]);

        
        //Filter for price
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`); //replace for eg if gt occur then gt-> $gt
        


        this.query = this.query.find(JSON.parse(queryStr));
        
        return this;
    }
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports = ApiFeatures;