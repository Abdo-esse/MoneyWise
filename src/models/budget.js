import { DataTypes, Model } from "sequelize";

export default (sequelize)=>{
    class Budget extends Model{
        static associations(models){
            Budget.belongsTo(models.Category,{foreignKey:'category_id'})
            Budget.belongsTo(models.User, { foreignKey: 'user_id' });

        }
    }
    Budget.init({
        id:{
            type:DataTypes.UUID,
            primaryKey: true,
        }, 
        user_id: {
        type: DataTypes.UUID,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      monton:{
        type:DataTypes.FLOAT,
        allowNull:false
      }
    },{
        Sequelize,
        tableName:'budgets',
        timestamps:true
    })

    
}