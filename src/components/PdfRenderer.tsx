import React from "react";
import { Button } from "@mui/material";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const PdfDocument: React.FC<{ userOutput: any }> = ({ userOutput }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>User Form Output</Text>
        {Object.entries(userOutput).map(([key, value]) => (
          <Text key={key} style={styles.text}>
            {`${key}: ${value}`}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

const ExportPdfButton: React.FC<{ formData: any }> = ({ formData }) => {
  return (
    <PDFDownloadLink
      document={<PdfDocument userOutput={formData} />}
      fileName="user_output.pdf"
      style={{ textDecoration: "none" }}
    >
      {({ loading }) => (
        <Button variant="contained" color="primary">
          {loading ? "Loading document..." : "Download PDF"}
        </Button>
      )}
    </PDFDownloadLink>
  );
};

export default ExportPdfButton;
