export class PlanzerService {
  constructor(private apiKey: string) {}

  async createShipment(data: any) {
    // MOCK CALL: Replace with actual Planzer REST API endpoint
    // Usually: POST https://api.planzer.ch/v1/shipments
    const response = await fetch('https://api.planzer.ch/v1/shipments', {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        recipient: {
          name: `${data.order.shippingAddress.fullName}`,
          street: data.order.shippingAddress.streetLine1,
          city: data.order.shippingAddress.city,
          zip: data.order.shippingAddress.postalCode,
        },
        // Planzer-specific fields found in PrestaShop/Shopware versions:
        department: data.department,
        customer_id: data.customerNum,
      })
    });

    return response.json(); // Should return { trackingNumber: '...', labelUrl: '...' }
  }
}