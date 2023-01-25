import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DocumentService } from '../../service/document.service';

@Component({
  selector: 'file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.css'],
})
export class FileUploadComponent {
  @Input('required-file-type')
  requiredFileType: string;

  ref: DynamicDialogRef;

  fileName = '';
  uploadProgress: number;
  uploadSub: Subscription;

  constructor(
    private http: HttpClient,
    private documentService: DocumentService,
    public dialogService: DialogService
  ) {}

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('thumbnail', file);

      const upload$ = this.http
        .post('/api/thumbnail-upload', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(finalize(() => this.reset()));

      this.uploadSub = upload$.subscribe((event) => {
        // if (event.type == HttpEventType.UploadProgress) {
        // //   this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        // }
      });
    }
  }

  /*  uploadDocumento() {
    this.documentService
      .getTipoDocumentoVisibile(this.sezione, true)
      .subscribe((data) => {
        this.ref = this.dialogService.open(DialogComponent, {
          header: 'Carica Documento',
          width: '80%',
          data: { tipoDocumento: data.body, sezione: this.sezione },
        });
        this.ref.onClose.subscribe((datiDocumento) => {
          if (datiDocumento) {
            if (this.idGruppo) {
              datiDocumento['idGruppo'] = this.idGruppo;
            } else {
              datiDocumento['idGruppo'] = '1';
            }
            this.documentService
              .uploadDocument(
                datiDocumento,
                this.route.snapshot.params.idProcesso
              )
              .subscribe(
                (data) => {
                  this.onSaveTemplate.emit(data);
                },
                (err) => {
                  console.error(
                    'errore in fase di upload del documento in sezione check-conformita'
                  );
                }
              );
          }
        });
      });
  } */

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}

function finalize(
  arg0: () => void
): import('rxjs').OperatorFunction<
  import('@angular/common/http').HttpEvent<Object>,
  unknown
> {
  throw new Error('Function not implemented.');
}
