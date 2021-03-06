import { TagObject } from 'openapi3-ts';
import { rawLoad } from '../../utils/raw-load';

const whatsappDescription = rawLoad(__dirname, './whatsapp.md');
const facebookDescription = rawLoad(__dirname, './facebook.md');
const subscriptionsDescription = rawLoad(__dirname, './subscriptions.md');
const templatesDescription = rawLoad(__dirname, './templates.md');
const messageReportDescription = rawLoad(__dirname, './message-report.md');
const flowReportDescription = rawLoad(__dirname, './flow-report.md');

const tags: TagObject[] = [{
  name: 'WhatsApp',
  description: whatsappDescription,
}, {
  name: 'Facebook',
  description: facebookDescription,
}, {
  name: 'Subscriptions',
  description: subscriptionsDescription,
}, {
  name: 'Templates',
  description: templatesDescription,
}, {
  name: 'Message Report',
  description: messageReportDescription,
}, {
  name: 'Flow Report',
  description: flowReportDescription,
}];

export default tags;
