import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// Função para gerar o relatório
export function generateReport(funcionario, trocas) {
  if (!funcionario || !trocas.length) {
    alert("Nenhuma troca encontrada para esse funcionário");
    return;
  }

  // Filtro de trocas pelo funcionário
  const trocasFiltradas = trocas.filter(
    (troca) => troca.funcionario.id === funcionario.id
  );

  // Se não houver trocas, exibe um alerta
  if (trocasFiltradas.length === 0) {
    alert("Esse funcionario ainda não realizou trocas.");
    return;
  }

  // Criando os dados da tabela
  const tabelaBody = [
    [
      { text: "Data", bold: true },
      { text: "EPI", bold: true },
      { text: "CA", bold: true },
      { text: "Motivo", bold: true },
      { text: "Quantidade", bold: true }
    ],
    ...trocasFiltradas.map(troca => [
      new Date(troca.dataTroca).toLocaleDateString("pt-BR"),
      troca.epi.descricao,
      troca.epi.ca,
      troca.motivo,
      troca.quantidade
    ])
];

const docDefinition = {
    content: [
      { text: "Relatório de Trocas de EPI", style: "header" },
      { text: `Funcionário: ${funcionario.nome}`, style: "subheader" },
      { text: `Setor: ${funcionario.setor}`, style: "subheader" },
      { text: `Registro: ${funcionario.registro}\n\n`, style: "subheader" },
      
      { text: "Lista de Trocas:", style: "sectionHeader" },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "auto", "auto", "auto"],
          body: tabelaBody
        },
        layout: "lightHorizontalLines"
      }
    ],
    styles: {
      header: { fontSize: 18, bold: true, alignment: "center", margin: [0, 0, 0, 10] },
      subheader: { fontSize: 12, bold: true, margin: [0, 0, 0, 5] },
      sectionHeader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] }
    }
  };

  // Criando o PDF e abrindo na tela
  pdfMake.createPdf(docDefinition).open();
}
