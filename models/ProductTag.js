const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns
    id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER //needs to reference 'Product' model's 'id'
    tag_id: DataTypes.INTEGER //needs to reference the 'Tag' model's 'id'
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag'
  }
)

module.exports = ProductTag
