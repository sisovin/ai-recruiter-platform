import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Interview from './Interview';

class JobPosting extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public requirements!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

JobPosting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'JobPosting',
  }
);

JobPosting.hasMany(Interview, { foreignKey: 'jobId' });

export default JobPosting;
