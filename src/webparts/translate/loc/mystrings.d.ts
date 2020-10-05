declare interface ITranslateWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'TranslateWebPartStrings' {
  const strings: ITranslateWebPartStrings;
  export = strings;
}
