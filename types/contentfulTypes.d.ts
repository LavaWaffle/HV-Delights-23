import { Entry, Asset } from 'contentful'
export const Delights = 'delights'
export interface Delights {
  //delights
  /*  */
  readonly id: number
  readonly delightType: ReadonlyArray<'Sandwiches'|'Salads'|'Soups'|'Snacks'|'Drinks'>
  readonly description: { content: any, data: any, nodeType: string }
  readonly ingredients: ReadonlyArray<string>
  readonly numReviews: number
  readonly nutrition: ReadonlyArray<string>
  readonly price: number
  readonly rating: number
  readonly thumbnail: Asset
  readonly title: string
}

export const Reviews = 'reviews'
export interface Reviews {
  //reviews
  /*  */
  readonly author: string
  readonly reviewText: string
}

export const Services = 'services'
export interface Services {
  //services
  /*  */
  readonly description: { content: any, data: any, nodeType: string }
  readonly ninety: number
  readonly onetwenty: number
  readonly sixty: number
  readonly title: string
  readonly type: string
}

export const Team = 'team'
export interface Team {
  //team
  /*  */
  readonly address: string
  readonly compRecord: { content: any, data: any, nodeType: string }
  readonly distance: number
  readonly hasBusinessPlan: string
  readonly hasField: string
  readonly location: { lat:string, lon:string }
  readonly otherInfo?: { content: any, data: any, nodeType: string }
  readonly teamName: string
  readonly teamNumber: string
  readonly travelTime: number
  readonly wantsToJoin: string
}

export const Thumbnails = 'thumbnails'
export interface Thumbnails {
  //thumbnails
  /*  */
  readonly grayThumbnail: Asset
  readonly slug: string
  readonly thumbnail: Asset
  readonly title: string
}

