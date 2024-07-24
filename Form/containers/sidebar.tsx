import React from 'react';
import { Accordion, Group, Text } from '@mantine/core';
import classes from '../page.module.css';
import InstiDetails from '../elements/Insti_details';
import ContactDetails from '../elements/Contact_Details';
import NodalContact from '../elements/Nodal_Details';
import FacultyDetails from '../elements/details_file';
import Intake from '../elements/phd_intake';
import Other from '../elements/other_details';
import BankDetails from '../elements/bank_details';
import GenOrder from '../elements/gen_order';
import SeatAllot from '../elements/seat_allot';

const contentMap = [
  { value: 'Details of Institution', content: <InstiDetails />, label: 'Details of Institution', id: 1 },
  { value: 'Contact Details of Head of Institution', content: <ContactDetails />, label: 'Contact Details of Head of Institution', id: 2 },
  { value: 'Contact Details of Nodal Officer', content: <NodalContact />, label: 'Contact Details of Nodal Officer', id: 3 },
  { value: 'Details of Faculty Members', content: <FacultyDetails />, label: 'Details of Faculty Members', id: 4 },
  { value: 'Intake of PhD candidates', content: <Intake />, label: 'Intake of PhD candidates', id: 5 },
  { value: 'Seat Allotment', content: <SeatAllot />, label: 'Seat Allotment', id: 6 },
  { value: 'Generate Implementation Order', content: <GenOrder />, label: 'Generate Implementation Order', id: 7 },
  { value: 'Uploaded Documents/Bank Details', content: <BankDetails />, label: 'Uploaded Documents/Bank Details', id: 8 },
  { value: 'Other Details', content: <Other />, label: 'Files', id: 9 }
];

interface AccordionLabelProps {
  label: string;
}

function AccordionLabel({ label }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text>{label}</Text>
      </div>
    </Group>
  );
}

const Sidebar: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  const items = contentMap.map((item) => (
    <Accordion.Item className={classes.accordionItem} value={item.id.toString()} key={item.label}>
      <Accordion.Control>
        <AccordionLabel label={item.label} />
      </Accordion.Control>
      <Accordion.Panel>
        {disabled ? <Text color="dimmed">Content is disabled</Text> : item.content}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="separated" className={classes.accordion}>
      {items}
    </Accordion>
  );
};

export default Sidebar;
