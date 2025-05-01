import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Candidate from './CandidateProfile';
import Job from './JobPosting';

class Interview extends Model {
  public id!: number;
  public date!: Date;
  public time!: string;
  public participants!: string[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Interview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    participants: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Interview',
  }
);

Interview.belongsTo(Candidate, { foreignKey: 'candidateId' });
Interview.belongsTo(Job, { foreignKey: 'jobId' });

export default Interview;
