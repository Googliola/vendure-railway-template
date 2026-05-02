import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { planzerFulfillmentHandler } from './planzer.handler';
import { PLANZER_LABEL_CUSTOM_FIELD, PLANZER_UI_LABELS } from './constants';

@VendurePlugin({
  imports: [PluginCommonModule],
  configuration: config => {
    // 1. Register the Shipping Handler
    config.shippingOptions.fulfillmentHandlers.push(planzerFulfillmentHandler);
		
		config.customFields.Fulfillment.push({
			name: PLANZER_LABEL_CUSTOM_FIELD,
			type: 'string',
			label: [{ languageCode: LanguageCode.en, value: PLANZER_UI_LABELS.LABEL_URL_FIELD }],
		});

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