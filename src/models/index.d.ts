import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Options {
  readonly color?: string;
  readonly finish?: string;
  readonly position?: string;
  readonly rise?: string;
  constructor(init: ModelInit<Options>);
}

export declare class Attributes {
  readonly apparelGender?: string;
  readonly apparelMaterial?: string;
  readonly apparelSize?: string;
  readonly apparelSizeSegment?: string;
  readonly apparelSizeModifier?: string;
  readonly apparelStyle?: string;
  readonly batteryCode?: string;
  readonly bearingSize?: string;
  readonly boltPattern?: string;
  readonly bore?: string;
  readonly compression?: string;
  readonly containerSize?: string;
  readonly diameter?: string;
  readonly handlebarBlinkers?: string;
  readonly handlebarClampingDiameter?: string;
  readonly handlebarConfiguration?: string;
  readonly handlebarControlColor?: string;
  readonly handlebarPullback?: string;
  readonly handlebarRise?: string;
  readonly handlebarDiameter?: string;
  readonly handlebarSwitchColor?: string;
  readonly handlebarStyle?: string;
  readonly handlebarWidth?: string;
  readonly lensStyle?: string;
  readonly loadRating?: string;
  readonly material?: string;
  readonly pitch?: string;
  readonly seatStyle?: string;
  readonly seatWidthDriver?: string;
  readonly seatWidthPassenger?: string;
  readonly shape?: string;
  readonly sizing?: string;
  readonly speed?: string;
  readonly springRate?: string;
  readonly sprocketPosition?: string;
  readonly sprocketTeeth?: string;
  readonly sprocketSize?: string;
  readonly thickness?: string;
  readonly tireApplication?: string;
  readonly tireConstruction?: string;
  readonly tirePly?: string;
  readonly tireRimOffset?: string;
  readonly tireSpeedRating?: string;
  readonly tireType?: string;
  readonly wheelDiameter?: string;
  readonly wheelDisc?: string;
  readonly wheelSpokeCount?: string;
  readonly wheelSpokeFinish?: string;
  readonly wheelWidth?: string;
  constructor(init: ModelInit<Attributes>);
}

export declare class Prices {
  readonly MSRP?: number;
  readonly MAP?: number;
  readonly store?: number;
  readonly ebay?: number;
  readonly amazon?: number;
  readonly wholesaleLow?: number;
  readonly wholesaleHigh?: number;
  readonly scratchLow?: number;
  readonly scratchHigh?: number;
  constructor(init: ModelInit<Prices>);
}

export declare class Dimensions {
  readonly height?: number;
  readonly length?: number;
  readonly width?: number;
  constructor(init: ModelInit<Dimensions>);
}

export declare class ImagesUrlType {
  readonly image1?: string;
  readonly image2?: string;
  readonly image3?: string;
  readonly image4?: string;
  readonly image5?: string;
  readonly image6?: string;
  readonly image7?: string;
  readonly image8?: string;
  constructor(init: ModelInit<ImagesUrlType>);
}

export declare class BulletPointsType {
  readonly bullet1?: string;
  readonly bullet2?: string;
  readonly bullet3?: string;
  readonly bullet4?: string;
  readonly bullet5?: string;
  constructor(init: ModelInit<BulletPointsType>);
}

export declare class Description {
  readonly store?: string;
  readonly ebay?: string;
  readonly amazon?: string;
  constructor(init: ModelInit<Description>);
}

export declare class Title {
  readonly store?: string;
  readonly ebay?: string;
  readonly amazon?: string;
  constructor(init: ModelInit<Title>);
}

export declare class DistributorsSKU {
  readonly tucke?: string;
  readonly wps?: string;
  readonly drag?: string;
  constructor(init: ModelInit<DistributorsSKU>);
}

export declare class SourceType {
  readonly Warehouse?: boolean;
  readonly Dropship?: boolean;
  constructor(init: ModelInit<SourceType>);
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ManufacturerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BrandMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubCategory2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly legacyID?: string;
  readonly mpn?: string;
  readonly source?: SourceType;
  readonly brandID?: string;
  readonly manufacturerID?: string;
  readonly categoryID?: string;
  readonly subcategoryID?: string;
  readonly subcategory2ID?: string;
  readonly binLocation?: string;
  readonly distributorSKU?: DistributorsSKU;
  readonly title?: Title;
  readonly description?: Description;
  readonly bulletPoints?: BulletPointsType;
  readonly imagesURL?: ImagesUrlType;
  readonly handle?: string;
  readonly weight?: number;
  readonly dimensionalWeight?: number;
  readonly appliedWeight?: number;
  readonly dimensions?: Dimensions;
  readonly shopifyFitmentTags?: string;
  readonly shopifyOnlyTagsprice?: string;
  readonly price?: Prices;
  readonly cost?: number;
  readonly attributes?: Attributes;
  readonly options?: Options;
  readonly updateFlag?: boolean;
  readonly ebayStoreCategoryID?: string;
  readonly parentSKU?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Manufacturer {
  readonly id: string;
  readonly name?: string;
  readonly Products?: (Product | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Manufacturer, ManufacturerMetaData>);
  static copyOf(source: Manufacturer, mutator: (draft: MutableModel<Manufacturer, ManufacturerMetaData>) => MutableModel<Manufacturer, ManufacturerMetaData> | void): Manufacturer;
}

export declare class Brand {
  readonly id: string;
  readonly name?: string;
  readonly Products?: (Product | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Brand, BrandMetaData>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand, BrandMetaData>) => MutableModel<Brand, BrandMetaData> | void): Brand;
}

export declare class SubCategory2 {
  readonly id: string;
  readonly name?: string;
  readonly Products?: (Product | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SubCategory2, SubCategory2MetaData>);
  static copyOf(source: SubCategory2, mutator: (draft: MutableModel<SubCategory2, SubCategory2MetaData>) => MutableModel<SubCategory2, SubCategory2MetaData> | void): SubCategory2;
}

export declare class SubCategory {
  readonly id: string;
  readonly name?: string;
  readonly Products?: (Product | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SubCategory, SubCategoryMetaData>);
  static copyOf(source: SubCategory, mutator: (draft: MutableModel<SubCategory, SubCategoryMetaData>) => MutableModel<SubCategory, SubCategoryMetaData> | void): SubCategory;
}

export declare class Category {
  readonly id: string;
  readonly name?: string;
  readonly Products?: (Product | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}