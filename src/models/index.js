// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Manufacturer, Brand, SubCategory2, SubCategory, Category, Options, Attributes, Prices, Dimensions, ImagesUrlType, BulletPointsType, Description, Title, DistributorsSKU, SourceType } = initSchema(schema);

export {
  Product,
  Manufacturer,
  Brand,
  SubCategory2,
  SubCategory,
  Category,
  Options,
  Attributes,
  Prices,
  Dimensions,
  ImagesUrlType,
  BulletPointsType,
  Description,
  Title,
  DistributorsSKU,
  SourceType
};