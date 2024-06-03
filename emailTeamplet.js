const getEmailWolcome = (username) => {
  return `
    <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <style>
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
    
            p {
                line-height: inherit
            }
    
            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }
    
            .image_block img+div {
                display: none;
            }
    
            @media (max-width:620px) {
                .desktop_hide table.icons-inner {
                    display: inline-block !important;
                }
    
                .icons-inner {
                    text-align: center;
                }
    
                .icons-inner td {
                    margin: 0 auto;
                }
    
                .image_block img.big,
                .row-content {
                    width: 100% !important;
                }
    
                .mobile_hide {
                    display: none;
                }
    
                .stack .column {
                    width: 100%;
                    display: block;
                }
    
                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }
    
                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
    
                .row-1 .column-1 .block-1.image_block td.pad {
                    padding: 0 !important;
                }
            }
        </style>
    </head>
    
    <body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
            <tbody>
                <tr>
                    <td>
                        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-bottom: 1px solid #E6E6E6; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-top: 1px solid #E6E6E6; color: #000000; width: 600px;" width="600">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                                    <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/976547_961184/unnamed.png" style="display: block; height: auto; border: 0; width: 598px; max-width: 100%;" width="598"></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="paragraph_block block-2" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:22.5px;">
                                                                        <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">Salut&nbsp; ${username} ,&nbsp;</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">Îţi mulţumim pentru înregistrare și spor la cumpărături.</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">Pentru informații suplimentare, ne poţi contacta de luni până vineri, în intervalul orar 08:30 - 17:30 la:</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">Email: bookoutletoffice@gmail.com</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">Telefon: (+4) 0756 345 560</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                                                        <p style="margin: 0; margin-bottom: 0px;">Cu drag,</p>
                                                                        <p style="margin: 0;">Echipa BookOutlet</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="divider_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #5EB3D2;"><span>&#8202;</span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="image_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                                    <div class="alignment" align="center" style="line-height:10px"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/976547_961184/logo-footer.png" style="display: block; height: auto; border: 0; width: 150px; max-width: 100%;" width="150"></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                        <tr>
                                                                            <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                <!--[if !vml]><!-->
                                                                                <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                                                                    <tr>
                                                                                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                                                        <td style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
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
        </table><!-- End -->
    </body>
    
    </html>
    `;
};

const resetPasswordEmail = (username, email, token) => {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <!--[if gte mso 9]>
  <xml>
	<o:OfficeDocumentSettings>
	  <o:AllowPNG/>
	  <o:PixelsPerInch>96</o:PixelsPerInch>
	</o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="x-apple-disable-message-reformatting">
	<!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
	<title></title>
	
	  <style type="text/css">
		@media only screen and (min-width: 620px) {
	.u-row {
	  width: 600px !important;
	}
	.u-row .u-col {
	  vertical-align: top;
	}
  
	.u-row .u-col-50 {
	  width: 300px !important;
	}
  
	.u-row .u-col-100 {
	  width: 600px !important;
	}
  
  }
  
  @media (max-width: 620px) {
	.u-row-container {
	  max-width: 100% !important;
	  padding-left: 0px !important;
	  padding-right: 0px !important;
	}
	.u-row .u-col {
	  min-width: 320px !important;
	  max-width: 100% !important;
	  display: block !important;
	}
	.u-row {
	  width: 100% !important;
	}
	.u-col {
	  width: 100% !important;
	}
	.u-col > div {
	  margin: 0 auto;
	}
  }
  body {
	margin: 0;
	padding: 0;
  }
  
  table,
  tr,
  td {
	vertical-align: top;
	border-collapse: collapse;
  }
  
  p {
	margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
	table-layout: fixed;
  }
  
  * {
	line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
	color: inherit !important;
	text-decoration: none !important;
  }
  
  table, td { color: #000000; } #u_body a { color: #161a39; text-decoration: underline; }
	  </style>
	
	
  
  <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
	<!--[if IE]><div class="ie-container"><![endif]-->
	<!--[if mso]><div class="mso-container"><![endif]-->
	<table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
	<tbody>
	<tr style="vertical-align: top">
	  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
	  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
	  
	
	
  <div class="u-row-container" style="padding: 0px;background-color: #f9f9f9">
	<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f9f9f9;">
	  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
		
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
	<div style="height: 100%;width: 100% !important;">
	<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:'Lato',sans-serif;" align="left">
		  
	<table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #f9f9f9;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
	  <tbody>
		<tr style="vertical-align: top">
		  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
			<span>&#160;</span>
		  </td>
		</tr>
	  </tbody>
	</table>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
	<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
	</div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
		<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
	  </div>
	</div>
	</div>
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
	<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
	  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
		
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
	<div style="height: 100%;width: 100% !important;">
	<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px;font-family:'Lato',sans-serif;" align="left">
		  
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
	<tr>
	  <td style="padding-right: 0px;padding-left: 0px;" align="center">
		<img align="center" border="0" src="https://api-book-outlet.vercel.app/static/utils/logo.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 29%;max-width: 168.2px;" width="168.2"/>
	  </td>
	</tr>
  </table>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
	<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
	</div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
		<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
	  </div>
	</div>
	</div>
	
  
  
	
	
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
	<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #161a39;">
	  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]-->
		
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
	<div style="height: 100%;width: 100% !important;">
	<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:35px 10px 10px;font-family:'Lato',sans-serif;" align="left">
		  
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
	<tr>
	  <td style="padding-right: 0px;padding-left: 0px;" align="center">
		
		<img align="center" border="0" src="https://api-book-outlet.vercel.app/static/utils/reset-password.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 10%;max-width: 58px;" width="58"/>
		
	  </td>
	</tr>
  </table>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 30px;font-family:'Lato',sans-serif;" align="left">
		  
	<div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
	  <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 28px; line-height: 39.2px; color: #ffffff; font-family: Lato, sans-serif;">Reseteaza-ti parola</span></p>
	</div>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
	<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
	</div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
		<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
	  </div>
	</div>
	</div>
	
  
  
	
	
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
	<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
	  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
		
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
	<div style="height: 100%;width: 100% !important;">
	<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:40px 40px 30px;font-family:'Lato',sans-serif;" align="left">
		  
	<div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
	  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px; color: #666666;">Buna ${username},</span></p>
  <p style="font-size: 14px; line-height: 140%;"> </p>
  <p style="line-height: 140%;"><span style="color: #666666;"><span style="font-size: 18px; line-height: 25.2px;">S-a initializat o procedura de resetare a parolei asociata contului tau de pe Bookoutlet.ro </span></span></p>
  <p style="font-size: 14px; line-height: 140%;"> </p>
  <p style="line-height: 140%;"><span style="color: #666666;"><span style="font-size: 18px; line-height: 25.2px;">Te rugam sa dai click pe butonul de resetare parola de mai  jos:</span></span></p>
	</div>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:0px 40px;font-family:'Lato',sans-serif;" align="left">
		  
	<!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
  <div align="left">
	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:52px; v-text-anchor:middle; width:215px;" arcsize="2%"  stroke="f" fillcolor="#18163a"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
	  <a href="https://bookoutlet.vercel.app/resetare-parola?email=${email}&key=${token}" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #18163a; border-radius: 1px;-webkit-border-radius: 1px; -moz-border-radius: 1px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
		<span style="display:block;padding:15px 40px;line-height:120%;"><span style="font-size: 18px; line-height: 21.6px;">Reseteaza parola</span></span>
	  </a>
	  <!--[if mso]></center></v:roundrect><![endif]-->
  </div>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:40px 40px 30px;font-family:'Lato',sans-serif;" align="left">
		  
	<div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
	  <p style="font-size: 14px; line-height: 140%;"><span style="color: #888888; font-size: 14px; line-height: 19.6px;"><em><span style="font-size: 16px; line-height: 22.4px;">Daca nu ai solicitat acest lucru , nu lua in considerare acest mail.</span></em></span></p>
  <p style="font-size: 14px; line-height: 140%;"> </p>
  <p style="font-size: 14px; line-height: 140%;"> </p>
  <p style="box-sizing: border-box; line-height: 140%; color: #101112; font-family: Arial, Helvetica, sans-serif; font-size: 15px; text-align: left; white-space: normal; background-color: #ffffff; margin: 0px;">Cu drag,</p>
  <p style="box-sizing: border-box; line-height: 140%; color: #101112; font-family: Arial, Helvetica, sans-serif; font-size: 15px; text-align: left; white-space: normal; background-color: #ffffff; margin: 0px;">Echipa BookOutlet</p>
  <p style="font-size: 14px; line-height: 140%;"><br /><span style="color: #888888; font-size: 14px; line-height: 19.6px;"><em><span style="font-size: 16px; line-height: 22.4px;"> </span></em></span></p>
	</div>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
	<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
	</div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
		<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
	  </div>
	</div>
	</div>

  <div class="u-row-container" style="padding: 0px;background-color: transparent">
	<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #18163a;">
	  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #18163a;"><![endif]-->
		
  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
	<div style="height: 100%;width: 100% !important;">
	<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
		  
	<div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
	  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px; color: #ecf0f1;">Contact</span></p>
  <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px; color: #ecf0f1 !important;">bookoutletoffice@gmail.com</span></p>
	</div>
		</td>
	  </tr>
	</tbody>
  </table>
  
	<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
	</div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
	<div style="height: 100%;width: 100% !important;">
	<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 10px;font-family:'Lato',sans-serif;" align="left">
		  
  <div align="left">
	<div style="display: table; max-width:187px;">
	<!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->
	
	  
	  <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
	  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
		<tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
		  <a href=" " title="Facebook" target="_blank">
			<img src="https://api-book-outlet.vercel.app/static/utils/facebook.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
		  </a>
		</td></tr>
	  </tbody></table>
	  <!--[if (mso)|(IE)]></td><![endif]-->
	  
	  <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
	  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
		<tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
		  <a href=" " title="Twitter" target="_blank">
			<img src="https://api-book-outlet.vercel.app/static/utils/X.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
		  </a>
		</td></tr>
	  </tbody></table>
	  <!--[if (mso)|(IE)]></td><![endif]-->
	  
	  <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
	  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
		<tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
		  <a href="" title="Instagram" target="_blank">
			<img src="https://api-book-outlet.vercel.app/static/utils/instagram.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
		  </a>
		</td></tr>
	  </tbody></table>
	  <!--[if (mso)|(IE)]></td><![endif]-->
	  
	  <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
	  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
		<tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
		  <a href=" " title="LinkedIn" target="_blank">
			<img src="https://api-book-outlet.vercel.app/static/utils/linkedin.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
		  </a>
		</td></tr>
	  </tbody></table>
	  <!--[if (mso)|(IE)]></td><![endif]-->
	  
	  
	  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
	</div>
  </div>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px;font-family:'Lato',sans-serif;" align="left">
		  
	<div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
	  <p style="line-height: 140%; font-size: 14px;"><span style="font-size: 14px; line-height: 19.6px;"><span style="color: #ecf0f1; font-size: 14px; line-height: 19.6px;"><span style="line-height: 19.6px; font-size: 14px;">Company ©  All Rights Reserved</span></span></span></p>
	</div>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
	<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
	</div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
		<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
	  </div>
	</div>
	</div>
	
  
  
	
	
  <div class="u-row-container" style="padding: 0px;background-color: #f9f9f9">
	<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #1c103b;">
	  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #1c103b;"><![endif]-->
		
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
	<div style="height: 100%;width: 100% !important;">
	<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:'Lato',sans-serif;" align="left">
		  
	<table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #1c103b;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
	  <tbody>
		<tr style="vertical-align: top">
		  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
			<span>&#160;</span>
		  </td>
		</tr>
	  </tbody>
	</table>
  
		</td>
	  </tr>
	</tbody>
  </table>
  
	<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
	</div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
		<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
	  </div>
	</div>
	</div>
	
  
  
	
	
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
	<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f9f9f9;">
	  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
		<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
		
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
	<div style="height: 100%;width: 100% !important;">
	<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
	
  <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
	<tbody>
	  <tr>
		<td style="overflow-wrap:break-word;word-break:break-word;padding:0px 40px 30px 20px;font-family:'Lato',sans-serif;" align="left">
		  
	<div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
	  
	</div>
  
		</td>
	  </tr>
	</tbody>
  </table>
  </div>
	</div>
  </div>
	  </div>
	</div>
	</div>
	  </td>
	</tr>
	</tbody>
	</table>
  
  </body>
  
  </html>
  `;
};

export { getEmailWolcome, resetPasswordEmail };
