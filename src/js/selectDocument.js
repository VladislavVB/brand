//documents
const documentedTabs = document.querySelector('.documented-tabs');
const documentedTabsTitleShowSm = document.querySelector('.documented-tabs-title-show-sm');
const CardsCertificates = document.querySelectorAll('.documents-cards-certificates');
const ContentTitleLeft = document.querySelectorAll('.documented-content-title-left');
const opacityContentDocument = document.querySelector('.opacity-content-document');


//выбор контента
const CardsCertificatesActive = (index, title) => {
    CardsCertificates.forEach((elem) => {
        elem.classList.remove('documents-cards-certificates-active');
    });
    CardsCertificates[index].classList.add('documents-cards-certificates-active');
    ContentTitleLeft.forEach((elem) => {
        elem.classList.remove('documented-content-title-left-active');
    });
    ContentTitleLeft[index].classList.add('documented-content-title-left-active');
    documentedTabsTitleShowSm.innerHTML = title;
    opacityContentDocument.classList.toggle('opacity-content-document-active');
    documentedTabs.classList.toggle('documented-tabs-active');
    documentedTabsTitleShowSm.classList.toggle('documented-tabs-title-show-sm-active');
    
};

opacityContentDocument.addEventListener('click', () => {
  opacityContentDocument.classList.remove('opacity-content-document-active');
  documentedTabs.classList.toggle('documented-tabs-active');
  documentedTabsTitleShowSm.classList.toggle('documented-tabs-title-show-sm-active');
});
//переключатель 
documentedTabsTitleShowSm.addEventListener('click', () => {
    documentedTabsTitleShowSm.classList.toggle('documented-tabs-title-show-sm-active');
    documentedTabs.classList.toggle('documented-tabs-active');
    opacityContentDocument.classList.toggle('opacity-content-document-active');
});

