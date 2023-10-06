export default function orderEmail(data){
    const { name, phoneNumber} = data.children
    const formData = {
      name: name.value,
      phone: phoneNumber.value,
      tours:{
          hoverla: data.children[2].children.hoverla.checked,
          skiBukovel: data.children[3].children.skiBukovel.checked,
          weekInCarpatians: data.children[4].children.weekInCarpatians.checked,
      }
  
    }
  
    return ( `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    
    <body>
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#f6f6f6"></v:fill>
                </v:background>
            <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                                                            <table cellspacing="0" cellpadding="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="es-m-p0r esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p style="font-size: 20px;">Order Information From Mountain Tours</p>
                                                                                            <p><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text">
                                                                                            <p style="font-size: 22px; text-align: center;"><strong>New Client order:</strong></p>
                                                                                            <p style="font-size: 22px; text-align: center;"><strong></strong><br></p>
                                                                                            <p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLIENT NAME</strong> : <span style="font-size:19px;"> <em> &nbsp;&nbsp;&nbsp;${formData.name}</em></span></p>
                                                                                            <p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLIENT PHONE NUMBER</strong> : <span style="font-size:19px;"> <em> &nbsp;&nbsp;&nbsp;${formData.phone}</em></span></p>
                                                                                            <p><br></p>
                                                                                            <p style="text-align: center; font-size: 24px;"><strong>Requested to order a tour</strong> :&nbsp;</p>
                                                                                            <p><br></p>
                                                                                            <ul>

                                                                                               ${formData.tours.hoverla ?
                                                                                                `<li>
                                                                                                    <p style="font-size: 19px;">&nbsp;Ascent to Hoverla&nbsp;</p>
                                                                                                </li>`:""}
                                                                                                ${formData.tours.skiBukovel ?
                                                                                                `<li>
                                                                                                    <p style="font-size: 19px;">&nbsp;Ski tour to Bukovel</p>
                                                                                                </li>`: ""}
                                                                                                ${formData.tours.weekInCarpatians ? `
                                                                                                <li>
                                                                                                    <p style="font-size: 19px;">&nbsp;Week in Carpathians</p>
                                                                                                </li>`: ""}
                                                                                            </ul>
                                                                                            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                                                                            <p><br></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                            <table cellspacing="0" cellpadding="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="560" align="left">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`)}


    