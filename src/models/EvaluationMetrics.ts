import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Interview from './Interview';

class EvaluationMetrics extends Model {
  public id!: number;
  public interview_id!: number;
  public rating!: number;
  public comments!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

EvaluationMetrics.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    interview_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'EvaluationMetrics',
  }
);

EvaluationMetrics.belongsTo(Interview, { foreignKey: 'interview_id' });

export default EvaluationMetrics;
