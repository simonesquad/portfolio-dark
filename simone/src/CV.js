import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import CVS from './document/S_B_.pdf';
import CV2 from './document/2020_SBallard_CV.pdf';


import {
  Button,
  ButtonGroup,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function CV() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (
        <Stack
          align='center'
        >
        <VStack
          h={{
            base: '140vh',
            sm: '130vh',
            md: '135vh'
          }}
          w={{
            base: '70vw',
            sm: '80vw',
            md: '100vw'
          }}
        >
        <Document 
          file={CVS} 
          onLoadSuccess={onDocumentLoadSuccess}
          >
        <Page pageNumber={pageNumber} />
        </Document>
        </VStack>
        <HStack
          h={{
            base: '10vh',
            sm: '15vh',
            md: '20vh'
          }}
        >
        <Text>Download:</Text>
        <ButtonGroup>
        <a rel="noreferrer" href={CVS} target = "_blank">
        <Button>Current</Button>
        </a>
        <a rel="noreferrer" href={CV2} target = "_blank">
        <Button>Legacy</Button> 
        </a>
        </ButtonGroup>
        </HStack>
        
      </Stack>
        );
    }
