import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TranslateWebPartStrings';
import Translate from './components/Translate';
import { ITranslateProps } from './components/ITranslateProps';
import { SPComponentLoader } from '@microsoft/sp-loader';

export interface ITranslateWebPartProps {
  description: string;
}
declare var google;
export default class TranslateWebPart extends BaseClientSideWebPart<ITranslateWebPartProps> {
  public onInit(): Promise<void> {
console.log('onInit');
alert(1);
    window['googleTranslateElementInit'] = () => {
      // tslint:disable-next-line:no-unused-expression
      new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    };

    return SPComponentLoader.loadScript('https://translate.google.com/translate_a/element.js', {
      globalExportsName: 'google'
    });
  } 


  public render(): void {
    var html = `
    <div id="google_translate_element">
    
    </div>
    `;
   this.domElement.innerHTML = html;
 
    // const element: React.ReactElement<ITranslateProps> = React.createElement(
    //   Translate,
    //   {
    //     description: this.properties.description
    //   }
    // );

    // ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
