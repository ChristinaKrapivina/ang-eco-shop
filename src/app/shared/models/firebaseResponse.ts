export interface FirebaseSectionsResponse {
  documents: FirebaseSection[];
}

export interface FirebaseSection {
  name: string;
  fields: { [key: string]: {["stringValue"]: string} };
  createTime: string;
  updateTime: string;
}

export interface FirebaseProductsResponse {
  documents: FirebaseProduct[];
}

export interface FirebaseProduct {
  name: string;
  fields: { 
    price: {["stringValue"]: string};
    img: ArrayValue;
    id: {["integerValue"]: string};
    descr: ArrayValue;
    title: {["stringValue"]: string};
  };
  createTime: string;
  updateTime: string;
}

interface ArrayValue {
  arrayValue: {
    values: {["stringValue"]: string}[];
  }
}