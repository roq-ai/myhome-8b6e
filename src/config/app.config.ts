interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Property Owner'],
  customerRoles: [],
  tenantRoles: ['Property Owner', 'Property Manager', 'Maintenance Staff', 'Tenant', 'Guest'],
  tenantName: 'Property',
  applicationName: 'Myhome',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage own property information',
    'Create new properties',
    'Delete own properties',
    'Edit own properties',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d4002e5e-a89e-4cdd-a378-e030fcce30ee',
};
