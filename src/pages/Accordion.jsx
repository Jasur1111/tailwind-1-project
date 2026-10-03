import React from 'react'

const Accordion = () => {
    return (
        <div>
            <Accordion slotProps={{ heading: { component: 'h4' } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Accordion
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        
        </div>
    )
}

export default Accordion