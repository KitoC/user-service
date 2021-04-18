import { DataTypes, BuildOptions, Model } from "sequelize";
import { Db, SequelizeExtended } from "./db.types";
import passportLocalSequelize from "passport-local-sequelize";
import utils from "../../utils";

export interface OrganizationSettingAttributes {
  organizationId?: string;
  settings?: string;
}

export interface OrganizationSettingInstance extends Model {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  organizationId: string;
  settings: any;
}

export type OrganizationSettingModelStatic = typeof Model &
  (new (
    values?: object,
    options?: BuildOptions
  ) => OrganizationSettingInstance);

export default (sequelize: SequelizeExtended) => {
  const OrganizationSetting = sequelize.defineExtended("OrganizationSetting", {
    organizationId: { type: DataTypes.UUID, allowNull: false },
    settings: { type: DataTypes.UUID, allowNull: false },
  }) as OrganizationSettingModelStatic & {
    associate: (db: Db) => void;
  };

  // OrganizationSetting.associate = function (models) {
  //   OrganizationSetting.hasMany(models.Setting, {
  //     foreignKey: { allowNull: false, name: "OrganizationSettingId" },
  //     onDelete: "CASCADE",
  //     hooks: true,
  //   });
  // };

  return OrganizationSetting;
};
