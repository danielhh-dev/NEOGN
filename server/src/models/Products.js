const { DataTypes } = require ('sequelize')

module.exports= (sequelize)=>{
    sequelize.define('product',{
        id:{
            type: DataTypes.STRING,
            primaryKey:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        description:{
            type: DataTypes.TEXT,
        },        
        category:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type:DataTypes.STRING,
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull: false,
        },
        stock:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        sku:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        diiscount:{
            type:DataTypes.FLOAT,
            defaultValue: 0.0,
        },
        rating: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
        },
        averageRating:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    })
}