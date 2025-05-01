import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Interview from './Interview';

class CandidateProfile extends Model {
  public id!: number;
  public name!: string;
  public title!: string;
  public bio!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CandidateProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CandidateProfile',
  }
);

CandidateProfile.hasMany(Interview, { foreignKey: 'candidateId' });

export default CandidateProfile;
