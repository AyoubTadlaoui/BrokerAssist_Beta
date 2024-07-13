export interface PageParams {
     token: string;
   }
   
   export type PageLoad = (event: {
     params: PageParams;
   }) => Promise<{ success: boolean; error?: any }>;
   