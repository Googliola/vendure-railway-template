import { LanguageCode, PluginCommonModule, VendurePlugin } from '@vendure/core';
import { planzerFulfillmentHandler } from './planzer.handler';

@VendurePlugin({
  imports: [PluginCommonModule],
  configuration: config => {
    // 1. Register the Shipping Handler
    config.shippingOptions.fulfillmentHandlers.push(planzerFulfillmentHandler);

    // 2. Add custom field to store the Label link
    config.customFields.Fulfillment.push({
      name: 'planzerLabelUrl',
      type: 'string',
      public: false,
      label: [{ languageCode: LanguageCode.en, value: 'Planzer Label URL' }],
    });

    return config;
  },
})
export class PlanzerPlugin {}