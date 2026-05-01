import { FulfillmentHandler, LanguageCode } from '@vendure/core';
import { PlanzerService } from './planzer.service';

export const planzerFulfillmentHandler = new FulfillmentHandler({
  code: 'planzer-fulfillment-handler',
  description: [
    { languageCode: LanguageCode.en, value: 'Planzer Paket Fulfillment' },
  ],
  args: {
    // These appear in the Admin UI when configuring the shipping method
    departmentNumber: { type: 'string', label: [{ languageCode: LanguageCode.en, value: 'Department Number' }] },
    customerNumber: { type: 'string', label: [{ languageCode: LanguageCode.en, value: 'Customer Number' }] },
    apiKey: { type: 'string', label: [{ languageCode: LanguageCode.en, value: 'API Key' }] },
  },
  createFulfillment: async (ctx, orders, lines, args) => {
    // Initialize your service (logic below)
    const planzerService = new PlanzerService(args.apiKey);

    try {
      // 1. Send shipment data to Planzer
      const shipment = await planzerService.createShipment({
        order: orders[0],
        department: args.departmentNumber,
        customerNum: args.customerNumber,
      });

      // 2. Return tracking info to Vendure
      return {
        method: 'Planzer Paket',
        trackingCode: shipment.trackingNumber,
        customFields: {
          // You'll need to define this custom field on Fulfillment
          planzerLabelUrl: shipment.labelUrl, 
        },
      };
    } catch (e) {
      throw new Error(`Planzer Integration Error: ${e.message}`);
    }
  },
});