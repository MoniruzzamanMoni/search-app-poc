import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private appConfig: any;

  constructor(private httpClient: HttpClient) {}

  // loadAppConfig() {
  //   const url = environment.config;
  //   return this.httpClient
  //     .get(url, {withCredentials: true})
  //     .toPromise()
  //     .then(data => {
  //       this.appConfig = data;
  //     })
  //     .catch(err => {
  //         this.appConfig = {'error': err};
  //     });
  // }

  get config() {
    return {
        "collections": [
    {
      "N": 0,
      "collection_code": ["itg", "itgbus", "itgorg", "itgcourts"],
      "errorPage": {
        "ppage": "content-solutions/direct-taxes"
      },
      "page_size": 20,
      "label": [
        "document",
        "documents",
        "document",
        "documents",
        "document",
        "documents"
      ],
      "alias": "All",
      "properties": [
        {
          "property": "decision_date_sortable",
          "alias": "Decision"
        },
        {
          "property": "sort_news_date",
          "alias": "News date"
        },
        {
          "property": "ibfd-tt-effectdate1-s",
          "alias": "Effective"
        },
        {
          "property": "ibfd-tt-signdate-s",
          "alias": "Signed"
        },
        {
          "property": "ibfd-tt-inforcedate-s",
          "alias": "In Force"
        },
        {
          "property": "ibfd-tt-terminationdate-s",
          "alias": "Terminated"
        }
      ],
      "dimensions": [
        {
          "id": 798,
          "alias": "Region",
          "pfx": "a"
        },
        {
          "id": 3290,
          "alias": "International Organization",
          "pfx": "an"
        },
        {
          "id": 603291,
          "alias": "Country/Jurisdiction",
          "pfx": "a"
        },
        {
          "id": 603292,
          "alias": "Related Country/Jurisdiction",
          "pfx": "a"
        },
        {
          "id": 3298,
          "alias": "Author",
          "pfx": "an"
        },
        {
          "id": 3319,
          "alias": "Treaty Subject",
          "pfx": "a"
        },
        {
          "id": 3326,
          "alias": "Status",
          "pfx": "a"
        },
        {
          "id": 3307,
          "alias": "Language",
          "pfx": "a"
        },
        {
          "id": 3407,
          "alias": "State/Province/Canton",
          "pfx": "a"
        },
        {
          "id": 3423,
          "alias": "Keywords",
          "pfx": ""
        },
        {
          "id": 3484,
          "alias": "Year",
          "pfx": "a"
        },
        {
          "id": 3486,
          "alias": "Issue",
          "pfx": "an"
        },
        {
          "id": 3495,
          "alias": "Document Type",
          "pfx": "a"
        },
        {
          "id": 3497,
          "alias": "OECD Article",
          "pfx": "a"
        },
        {
          "id": 4123,
          "alias": "Journal Section",
          "pfx": "a"
        },
        {
          "id": 4911,
          "alias": "Series",
          "pfx": "a"
        },
        {
          "id": 5065,
          "alias": "Title",
          "pfx": "a"
        },
        {
          "id": 7324,
          "alias": "City/Province",
          "pfx": "a"
        },
        {
          "id": 7325,
          "alias": "Issuing Authority",
          "pfx": "an"
        },
        {
          "id": 4714,
          "alias": "Document Type",
          "pfx": "a"
        },
        {
          "id": 7419,
          "alias": "Bilateral/Multilateral",
          "pfx": ""
        },
        {
          "id": 7429,
          "alias": "MLI Treaty Status",
          "pfx": "an"
        },
        {
          "id": 7488,
          "alias": "-",
          "pfx": "a"
        },
        {
          "id": 7576,
          "alias": "National/Subnational",
          "pfx": ""
        }
      ],
      "filters": [
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 603292,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3290,
          "type": "singleselect",
          "load_on_init": false
        }
      ],
      "filter_threshold": 6,
      "actions": {
        "export": {
          "label": "Export",
          "icon": "far fa-file-export",
          "items": {
            "export.withsiblings.pdf": {
              "target": "blank",
              "icon": "far fa-file-pdf",
              "meta": ["pdf_chapter"]
            },
            "export.myself.pdf": {
              "icon": "far fa-file-pdf",
              "target": "blank",
              "meta": ["pdf_document", "pdf_article"]
            },
            "export.myself.excel": {
              "icon": "far fa-file-excel",
              "meta": ["excel_version"]
            }
          }
        },
        "print": {
          "icon": "far fa-print",
          "label": "Print",
          "items": {
            "print.doc": {},
            "print.selection": {}
          }
        },
        "cite": {
          "label": "Cite this",
          "meta": ["citation"]
        },
        "compare": {
          "label": "Compare"
        },
        "favourite": {
          "icon": "far fa-star",
          "label": "Add to favourites"
        },
        "annotate": {
          "icon": "far fa-edit",
          "label": "Add annotation"
        },
        "contact.editor": {
          "label": "Contact the Editor",
          "meta": ["tte_name"]
        }
      },
      "sorting": [
        {
          "label": "Date",
          "value": "common_date"
        }
      ],
      "template": {
        "name": "default"
      }
    },
    {
      "N": 4293760385,
      "subcollections": [
        {
          "collection_code": ["tns"],
          "errorPage": {
            "ppage": "content-solutions/direct-taxes"
          }
        }
      ],
      "collection_code": ["tns"],
      "label": ["report", "reports", "report", "reports", "report", "reports"],
      "dimensions": [],
      "filters": [
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 603292,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3290,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "propName": "sort_news_date",
          "type": "daterange"
        }
      ],
      "filter_threshold": 6,
      "sorting": [
        {
          "label": "Date",
          "value": "news_date"
        },
        {
          "label": "Countries",
          "value": "news_countries"
        },
        {
          "label": "Organization",
          "value": "news_organization"
        },
        {
          "label": "Title",
          "value": "title"
        }
      ],
      "template": {
        "name": "news"
      }
    },
    {
      "N": 4293744764,
      "subcollections": [
        {
          "collection_code": ["wht", "wht_ar", "mlit", "mlit_ar"],
          "errorPage": {
            "ppage": "content-solutions/tax-treaties"
          }
        },
        {
          "collection_code": ["taxcomp", "taxcomp_ar", "dtm", "dtm_ar"],
          "errorPage": {
            "ppage": "content-solutions/corporate"
          }
        },
        {
          "collection_code": ["tpdoc", "tpdoc_ar", "tpm", "tpm_ar"],
          "errorPage": {
            "ppage": "content-solutions/transfer-pricing"
          }
        },
        {
          "collection_code": ["vatst", "vatst_ar", "vatrates", "vatrates_ar"],
          "errorPage": {
            "ppage": "content-solutions/indirect-taxes"
          }
        }
      ],
      "collection_code": [
        "atad",
        "beps",
        "covidem",
        "dac6",
        "dac6list",
        "dac6_ar",
        "dtm",
        "gmm",
        "holdm",
        "kf",
        "kfca",
        "kfch",
        "kfus",
        "mlit",
        "taxcomp",
        "tpdoc",
        "tpm",
        "vatrates",
        "vatst",
        "wht",
        "atad_ar",
        "beps_ar",
        "covidem_ar",
        "dtm_ar",
        "gmm_ar",
        "holdm_ar",
        "kf_ar",
        "kfca_ar",
        "kfch_ar",
        "kfus_ar",
        "mlit_ar",
        "taxcomp_ar",
        "tpdoc_ar",
        "tpm_ar",
        "vatrates_ar",
        "vatst_ar",
        "wht_ar"
      ],
      "label": ["table", "tables", "table", "tables", "table", "tables"],
      "filters": [
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 7576,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3407,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7488,
          "type": "singleselect",
          "alias": "Table Type",
          "load_on_init": false
        },
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3290,
          "type": "singleselect",
          "load_on_init": false
        }
      ],
      "filter_threshold": 6,
      "sorting": [
        {
          "label": "Country",
          "value": "country_subnat"
        },
        {
          "label": "Review date",
          "value": "reviewdate"
        }
      ],
      "template": {
        "name": "tables"
      },
      "errorPage": {
        "ppage": "content-solutions/direct-taxes"
      }
    },
    {
      "N": 4293738526,
      "subcollections": [
        {
          "collection_code": ["rmtp", "rmtp_ar"],
          "errorPage": {
            "ppage": "content-solutions/corporate"
          }
        },
        {
          "collection_code": ["gttc2", "gttc2_ar"],
          "errorPage": {
            "ppage": "content-solutions/tax-treaties"
          }
        },
        {
          "collection_code": [
            "tp",
            "tpbrtp",
            "tpcvtp",
            "tpdrtp",
            "tpigtp",
            "tp_ar",
            "tpbrtp_ar",
            "tpcvtp_ar",
            "tpdrtp_ar",
            "tpigtp_ar"
          ],
          "errorPage": {
            "ppage": "content-solutions/transfer-pricing"
          }
        },
        {
          "collection_code": ["evat", "evat_ar"],
          "errorPage": {
            "ppage": "content-solutions/indirect-taxes"
          }
        }
      ],
      "collection_code": [
        "chsuba",
        "chsubb",
        "cta",
        "eci",
        "epi",
        "evat",
        "gm",
        "gtha",
        "gthb",
        "gthc",
        "gttc2",
        "hold",
        "if",
        "ita",
        "judsys",
        "ma",
        "nathsuba",
        "nathsubb",
        "pe",
        "rmtp",
        "tp",
        "tpbrtp",
        "tpcvtp",
        "tpdrtp",
        "tpigtp",
        "chsuba_ar",
        "chsubb_ar",
        "cta_ar",
        "eci_ar",
        "epi_ar",
        "evat_ar",
        "gm_ar",
        "gtha_ar",
        "gthb_ar",
        "gthc_ar",
        "gttc2_ar",
        "hold_ar",
        "if_ar",
        "ita_ar",
        "judsys_ar",
        "ma_ar",
        "nathsuba_ar",
        "nathsubb_ar",
        "pe_ar",
        "rmtp_ar",
        "tp_ar",
        "tpbrtp_ar",
        "tpcvtp_ar",
        "tpdrtp_ar",
        "tpigtp_ar"
      ],
      "errorPage": {
        "ppage": "content-solutions/direct-taxes"
      },
      "label": [
        "document",
        "documents",
        "chapter",
        "chapters",
        "chapter / section",
        "full document"
      ],
      "filters": [
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 7576,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3407,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7488,
          "type": "singleselect",
          "alias": "Collection Title",
          "load_on_init": false
        },
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3298,
          "type": "singleselect",
          "load_on_init": false
        }
      ],
      "filter_threshold": 6,
      "sorting": [
        {
          "label": "Country",
          "value": "country_chunks"
        },
        {
          "label": "Review date",
          "value": "reviewdate"
        }
      ],
      "template": {
        "name": "chapters"
      }
    },
    {
      "N": 4293738226,
      "subcollections": [
        {
          "collection_code": ["evdcom", "evdintro"],
          "template": {
            "name": "topics"
          }
        },
        {
          "collection_code": ["gttc", "gttc_ar"],
          "errorPage": {
            "ppage": "content-solutions/tax-treaties"
          }
        },
        {
          "collection_code": ["its", "its_ar"],
          "errorPage": {
            "ppage": "content-solutions/corporate"
          }
        },
        {
          "collection_code": [
            "tp",
            "tpbrtp",
            "tpcvtp",
            "tpdrtp",
            "tpigtp",
            "tp_ar",
            "tpbrtp_ar",
            "tpcvtp_ar",
            "tpdrtp_ar",
            "tpigtp_ar"
          ],
          "template": {
            "name": "topics_no_author"
          },
          "errorPage": {
            "ppage": "content-solutions/transfer-pricing"
          }
        },
        {
          "collection_code": ["rmtp", "rmtp_ar"],
          "template": {
            "name": "topics_no_author"
          },
          "errorPage": {
            "ppage": "content-solutions/direct-taxes"
          }
        },
        {
          "collection_code": ["peglobal", "peglobal_ar", "eucom", "eucom_ar"],
          "errorPage": {
            "ppage": "content-solutions/direct-taxes"
          }
        }
      ],
      "collection_code": [
        "its",
        "gttc",
        "eucom",
        "evdcom",
        "evdintro",
        "gtha",
        "hold",
        "if",
        "ma",
        "peglobal",
        "rmtp",
        "tp",
        "tpbrtp",
        "tpcvtp",
        "tpdrtp",
        "tpigtp",
        "vatopt",
        "its_ar",
        "gttc_ar",
        "eucom_ar",
        "evdcom_ar",
        "evdintro_ar",
        "gtha_ar",
        "hold_ar",
        "if_ar",
        "ma_ar",
        "peglobal_ar",
        "rmtp_ar",
        "tp_ar",
        "tpbrtp_ar",
        "tpcvtp_ar",
        "tpdrtp_ar",
        "tpigtp_ar",
        "vatopt_ar"
      ],
      "errorPage": {
        "ppage": "content-solutions/indirect-taxes"
      },
      "label": [
        "document",
        "documents",
        "chapter",
        "chapters",
        "chapter / section",
        "full document"
      ],
      "filters": [
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7488,
          "type": "singleselect",
          "alias": "Collection Title",
          "load_on_init": false
        },
        {
          "N": 3290,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3298,
          "type": "singleselect",
          "load_on_init": false
        }
      ],
      "filter_threshold": 6,
      "sorting": [
        {
          "label": "Collection title",
          "value": "chapter_order"
        },
        {
          "label": "Review date",
          "value": "reviewdate"
        }
      ],
      "template": {
        "name": "topics"
      }
    },
    {
      "N": 4293744759,
      "expandAlert": true,
      "actions": {
        "mli_alert": {
          "icon": "fas fa-bell",
          "label": "Hide Alerts"
        },
        "export": {
          "label": "Export",
          "icon": "far fa-file-export",
          "items": {
            "export.withsiblings.pdf": {
              "target": "blank",
              "icon": "far fa-file-pdf",
              "meta": ["pdf_chapter"]
            },
            "export.myself.pdf": {
              "icon": "far fa-file-pdf",
              "target": "blank",
              "meta": ["pdf_document", "pdf_article"]
            },
            "export.myself.excel": {
              "icon": "far fa-file-excel",
              "meta": ["excel_version"]
            }
          }
        },
        "print": {
          "icon": "far fa-print",
          "label": "Print",
          "items": {
            "print.doc": {},
            "print.selection": {}
          }
        },
        "cite": {
          "label": "Cite this",
          "meta": ["citation"]
        },
        "compare": {
          "label": "Compare"
        },
        "favourite": {
          "icon": "far fa-star",
          "label": "Add to favourites"
        },
        "annotate": {
          "icon": "far fa-edit",
          "label": "Add annotation"
        },
        "contact.editor": {
          "label": "Contact the Editor",
          "meta": ["tte_name"]
        }
      },
      "subcollections": [
        {
          "N": 4293746960,
          "collection_code": ["ttmodel"],
          "label": ["model", "models", "model", "models", "model", "models"],
          "template": {
            "name": "models"
          }
        },
        {
          "N": 4293746977,
          "collection_code": ["mlipos", "treaties"],
          "label": [
            "treaty",
            "treaties",
            "treaty",
            "treaties",
            "treaty",
            "treaties"
          ],
          "template": {
            "name": "treaty"
          }
        }
      ],
      "collection_code": ["mlipos", "ttmodel", "treaties"],
      "errorPage": {
        "ppage": "content-solutions/tax-treaties"
      },
      "label": [
        "document",
        "documents",
        "document",
        "documents",
        "document",
        "documents"
      ],
      "dimensions": [
        {
          "id": 3326,
          "alias": " Treaty Status",
          "pfx": "a"
        }
      ],
      "filters": [
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 603292,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 3319,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3326,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7429,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7419,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3495,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3307,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3290,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "propName": "ibfd-tt-effectdate1-s",
          "type": "daterange"
        },
        {
          "propName": "ibfd-tt-signdate-s",
          "type": "daterange"
        },
        {
          "propName": "ibfd-tt-inforcedate-s",
          "type": "daterange"
        },
        {
          "propName": "ibfd-tt-terminationdate-s",
          "type": "daterange"
        }
      ],
      "filter_threshold": 6,
      "sorting": [
        {
          "label": "Countries",
          "value": "treaty_country"
        },
        {
          "label": "Title",
          "value": "title"
        },
        {
          "label": "Signed date",
          "value": "treaty_signed_date"
        },
        {
          "label": "Effective date",
          "value": "treaty_effective_date"
        }
      ],
      "template": []
    },
    {
      "N": 4293744763,
      "subcollections": [
        {
          "collection_code": ["irs"],
          "template": {
            "name": "irs"
          }
        },
        {
          "collection_code": ["irsdocs"],
          "template": {
            "name": "irsdocs"
          }
        },
        {
          "collection_code": ["oecd"],
          "template": {
            "name": "oecd"
          },
          "errorPage": {
            "ppage": "content-solutions/tax-treaties"
          }
        },
        {
          "collection_code": [
            "evdadmin",
            "evdcomprop",
            "evdeulaw",
            "evdeudir",
            "evdjudsys",
            "evdmodels",
            "evdrates",
            "evdtreaty"
          ],
          "template": {
            "name": "ps_evd"
          },
          "errorPage": {
            "ppage": "content-solutions/indirect-taxes"
          }
        },
        {
          "collection_code": ["ifrs"],
          "template": {
            "name": "ifrs"
          }
        },
        {
          "collection_code": ["eucomdec"],
          "template": {
            "name": "eucomdec"
          }
        },
        {
          "collection_code": ["cncirc"],
          "template": {
            "name": "cncirc"
          }
        },
        {
          "collection_code": ["vatdir"],
          "template": {
            "name": "vatdir"
          },
          "errorPage": {
            "ppage": "content-solutions/indirect-taxes"
          }
        },
        {
          "collection_code": ["eudir"],
          "template": {
            "name": "eudir"
          }
        },
        {
          "collection_code": ["eulaw"],
          "template": {
            "name": "eulaw"
          }
        },
        {
          "collection_code": ["wtl"],
          "errorPage": {
            "ppage": "content-solutions/tax-research-platform"
          }
        },
        {
          "collection_code": ["vatleg"],
          "errorPage": {
            "ppage": "content-solutions/indirect-taxes"
          }
        }
      ],
      "collection_code": [
        "cncirc",
        "vatdir",
        "vatleg",
        "wtl",
        "eucomdec",
        "eudir",
        "eulaw",
        "evdadmin",
        "evdcomprop",
        "evdeulaw",
        "evdeudir",
        "evdjudsys",
        "evdmodels",
        "evdrates",
        "evdtreaty",
        "ifrs",
        "irs",
        "irsdocs",
        "oecd"
      ],
      "errorPage": {
        "ppage": "content-solutions/direct-taxes"
      },
      "label": [
        "document",
        "documents",
        "document",
        "documents",
        "document",
        "documents"
      ],
      "dimensions": [
        {
          "id": 7488,
          "alias": "Domestic/International",
          "pfx": ""
        }
      ],
      "filters": [
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3290,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7488,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 3307,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3326,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 4714,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7324,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7325,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3484,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "propName": "ibfd-tt-effectdate1-s",
          "type": "daterange"
        },
        {
          "propName": "ibfd-tt-signdate-s",
          "type": "daterange"
        }
      ],
      "filter_threshold": 6,
      "sorting": [
        {
          "label": "Date",
          "value": "common_date"
        },
        {
          "label": "Signed date",
          "value": "treaty_signed_date"
        },
        {
          "label": "Title",
          "value": "global_title"
        },
        {
          "label": "Country",
          "value": "treaty_country"
        }
      ],
      "template": {
        "name": "ps"
      }
    },
    {
      "N": 4293760389,
      "subcollections": [
        {
          "N": 4293746984,
          "collection_code": ["ttcls"],
          "template": {
            "name": "ttcls"
          },
          "errorPage": {
            "ppage": "content-solutions/tax-treaties"
          }
        },
        {
          "N": 4293746959,
          "collection_code": ["ecji"],
          "template": {
            "name": "ecj"
          },
          "errorPage": {
            "ppage": "content-solutions/indirect-taxes"
          }
        },
        {
          "N": 4293746959,
          "collection_code": ["ecjd"],
          "template": {
            "name": "ecj"
          }
        },
        {
          "N": 4293744701,
          "collection_code": ["dcl"],
          "template": {
            "name": "dcl"
          },
          "errorPage": {
            "ppage": "content-solutions/indirect-taxes"
          }
        },
        {
          "N": 4293744701,
          "collection_code": ["ddtc"],
          "template": {
            "name": "dcl"
          }
        }
      ],
      "collection_code": ["dcl", "ddtc", "ecjd", "ecji", "ttcls"],
      "errorPage": {
        "ppage": "content-solutions/direct-taxes"
      },
      "label": ["case", "cases", "case", "cases", "case", "cases"],
      "filters": [
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 603292,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 3407,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7488,
          "type": "singleselect",
          "alias": "Collection Title",
          "load_on_init": false
        },
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3423,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3497,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "propName": "decision_date_sortable",
          "type": "daterange"
        }
      ],
      "filter_threshold": 6,
      "sorting": [
        {
          "label": "Decision date",
          "value": "decision_date"
        },
        {
          "label": "Country",
          "value": "case_law_country"
        }
      ],
      "template": {
        "name": "cl"
      }
    },
    {
      "N": 4293734380,
      "subcollections": [
        {
          "collection_code": ["ifacahier"],
          "template": {
            "name": "ifacahier"
          }
        }
      ],
      "collection_code": [
        "a16",
        "ab",
        "aar",
        "acec",
        "acc",
        "ald",
        "alts",
        "amae",
        "ami",
        "appe",
        "atac",
        "atae",
        "atah",
        "atg",
        "atp",
        "atr",
        "att",
        "av",
        "bitp",
        "bort",
        "bp",
        "bric",
        "bu",
        "caa",
        "ccac",
        "cbc",
        "cbte",
        "ccc",
        "cfcl",
        "cfe",
        "cil",
        "cit",
        "cjv",
        "conc",
        "cot",
        "cp",
        "crit",
        "ctc",
        "ctrm",
        "ctti",
        "cttl",
        "da",
        "dac",
        "da2012",
        "dai",
        "db",
        "dev",
        "ditp",
        "domc",
        "dreu",
        "drtb",
        "drtt",
        "dtc",
        "dtcc",
        "ebot",
        "eche",
        "ecm",
        "eejc",
        "ega",
        "eisd",
        "elit",
        "emc",
        "esii",
        "etep",
        "eti",
        "etl2014",
        "etl2015",
        "etl2016",
        "etl2017",
        "etl2018",
        "etl2019",
        "etl2020",
        "etl2021",
        "etl2022",
        "ets",
        "ett",
        "eube",
        "euft",
        "euit",
        "eutld",
        "eutld2010",
        "eutld2011",
        "eutld2012",
        "eutld2013",
        "evde",
        "evs",
        "faim",
        "ff",
        "fmd",
        "fsa",
        "ft",
        "gaar",
        "gmt",
        "gtc",
        "gtrb",
        "gus",
        "hac2",
        "hitp",
        "hrte",
        "hst",
        "ht",
        "hta2",
        "htc",
        "htcea",
        "iab",
        "iatm",
        "iatt2013",
        "ibi",
        "icb",
        "icta",
        "idtia",
        "idtc",
        "idtc2012",
        "idtc3",
        "idtr",
        "iect",
        "ieu",
        "ifacahier",
        "iipe",
        "igt",
        "iitl",
        "ikb",
        "ile",
        "ioa",
        "iop",
        "ipdl",
        "itc",
        "itcg",
        "itln",
        "itp",
        "itpd",
        "itpd2014",
        "itpp",
        "ittr",
        "itts",
        "ivg",
        "ius",
        "iust",
        "lata",
        "letl",
        "lit3",
        "lpt",
        "lret",
        "lsa",
        "lsco",
        "lse",
        "maie",
        "mas",
        "mip",
        "mdr",
        "mitl",
        "mjea",
        "mjeb",
        "mkit",
        "mtit",
        "mtt",
        "ndi",
        "ndtt",
        "nei",
        "ngm",
        "nic",
        "nit",
        "nitp",
        "nji",
        "nmtc",
        "nrt",
        "ntdp",
        "oecd2014",
        "olit",
        "odp",
        "otpg",
        "otsf",
        "peva",
        "pha",
        "pigfm",
        "pl",
        "pmc",
        "pnd",
        "ppei",
        "pt",
        "rc",
        "rctt",
        "ritt",
        "rm",
        "rr1",
        "rt",
        "rtl",
        "sal",
        "sdt",
        "sel",
        "sitl",
        "sitl2011",
        "soel",
        "sp",
        "sptl",
        "st",
        "stp",
        "stz",
        "tar",
        "tare",
        "tatp",
        "tatr",
        "taum",
        "taum2",
        "tbp",
        "tc",
        "tca",
        "tcab",
        "tcat",
        "tcbp",
        "tccg",
        "tce",
        "tcef",
        "tch",
        "tciv",
        "tcp",
        "tdd",
        "tde",
        "tea",
        "terra",
        "tes",
        "tfbi",
        "tfs",
        "tfsi",
        "tib",
        "tid",
        "tidt",
        "tif",
        "tip",
        "tipa",
        "tipu",
        "tis",
        "titb",
        "tiud",
        "tm",
        "tmeb",
        "tmtl",
        "toc",
        "tpbr",
        "tpcv",
        "tpd",
        "tpdr",
        "tpig",
        "tpig2",
        "tps",
        "tpro",
        "tptp",
        "trnt",
        "trsg",
        "ts",
        "tseu",
        "tsat",
        "tsm",
        "ttbb",
        "tta",
        "ttcl2013",
        "ttcl2014",
        "ttcl2015",
        "ttcl2016",
        "ttcl2017",
        "ttcl2018",
        "ttcl2019",
        "ttcl2020",
        "ttcl2021",
        "ttclg",
        "ttdl",
        "tte",
        "ttic",
        "ttil",
        "ttna",
        "ttp",
        "ttt",
        "tvc",
        "twe",
        "uae",
        "unm",
        "vatd",
        "veit",
        "vgep",
        "vgmc",
        "vsim"
      ],
      "label": [
        "document",
        "documents",
        "book",
        "books",
        "chapter / section",
        "book"
      ],
      "sorting": [
        {
          "label": "Published date",
          "value": "published_date"
        },
        {
          "label": "Title",
          "value": "global_title"
        }
      ],
      "filters": [
        {
          "N": 5065,
          "alias": "Title",
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 3298,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 4911,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 798,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3484,
          "type": "singleselect",
          "load_on_init": false
        }
      ],
      "filter_threshold": 6,
      "template": {
        "name": "books"
      },
      "errorPage": {
        "ppage": "shop/book"
      }
    },
    {
      "N": 4293744760,
      "subcollections": [
        {
          "collection_code": ["talk"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces"
          }
        },
        {
          "collection_code": ["aptb"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces",
            "prodid": 2256
          }
        },
        {
          "collection_code": ["bit"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces",
            "prodid": 2257
          }
        },
        {
          "collection_code": ["dfi"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces",
            "prodid": 2258
          }
        },
        {
          "collection_code": ["et"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces",
            "prodid": 2259
          }
        },
        {
          "collection_code": ["itaxs"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces",
            "prodid": 2676
          }
        },
        {
          "collection_code": ["itpj"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces",
            "prodid": 2260
          }
        },
        {
          "collection_code": ["ivm"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces",
            "prodid": 2261
          }
        },
        {
          "collection_code": ["wp"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces"
          }
        },
        {
          "collection_code": ["wtj"],
          "errorPage": {
            "ppage": "content-solutions/journal-articles-opinion-pieces",
            "prodid": 2262
          }
        }
      ],
      "collection_code": [
        "aptb",
        "bit",
        "dfi",
        "et",
        "itaxs",
        "itpj",
        "ivm",
        "talk",
        "wp",
        "wtj"
      ],
      "label": [
        "article",
        "articles",
        "article",
        "articles",
        "article",
        "articles"
      ],
      "filters": [
        {
          "N": 603291,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 3290,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 7488,
          "type": "singleselect",
          "alias": "Collection Title",
          "load_on_init": false
        },
        {
          "N": 3484,
          "type": "singleselect",
          "load_on_init": true
        },
        {
          "N": 3486,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 3298,
          "type": "singleselect",
          "load_on_init": false
        },
        {
          "N": 4123,
          "type": "singleselect",
          "load_on_init": false
        }
      ],
      "filter_threshold": 6,
      "sorting": [
        {
          "label": "Published date",
          "value": "publication_date"
        },
        {
          "label": "Title",
          "value": "title"
        }
      ],
      "template": {
        "name": "journals"
      }
    }
  ],

      topic: {
        topic_search: {
          use_old_taxonomy: {
            id: 'old',
            enabled: false,
            query: 'N=3+10&Ne=6185+6201+6332+6593+6680&select=relative_path',
            dimensions: [6185, 6201, 6332, 6593, 6680],
            name: 'Topic Search - old Approach',
          },
          use_new_taxonomy: {
            enabled: true,
            id: 'new',
            query: 'N=3+10&Ne=7838+7839+7840+7841&select=relative_path',
            dimensions: [7838, 7839, 7840, 7841],
            name: 'Topic Search - new Approach',
          },
        },
        topic_navigation: {
          use_old_taxonomy: {
            id: 'old',
            enabled: false,
            query: 'N=3+10&Ne=6185+6201+6332+6593+6680&select=relative_path',
            dimensions: [6185, 6201, 6332, 6593, 6680],
            prefix: '',
            name: 'Topic Navigation - old Approach',
          },
          use_new_taxonomy: {
            id: 'new',
            enabled: true,
            query: 'N=3+10&Ne=7838+7839+7840+7841&select=relative_path',
            dimensions: [7838, 7839, 7840, 7841],
            prefix: 'taxtopic',
            name: 'Topic Navigation - new Approach',
          },
        },
      },
      templates: [
        {
          name: 'example',
          fields: [
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'default',
          fields: [
            {
              field: 'titlelink',
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'search_title',
                },
              ],
            },
            {
              field: 'commoncountry',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'Country',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'last_modified',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'news',
          fields: [
            {
              field: 'titlelink',
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'search_title',
                },
              ],
            },
            {
              field: 'commoncountry',
              input: [
                {
                  type: 'prop',
                  name: 'name',
                  ref: 'ibfd-tnsdoc-country',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'ibfd-tnsdoc-date',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'evdnews',
          fields: [
            {
              field: 'titlelink',
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'search_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Author',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'p_content_author_list',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'ibfd-tnsdoc-date',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'journals',
          fields: [
            {
              field: 'titlelink',
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'search_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Author',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'p_content_author_list',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'ibfd-published',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Published online',
                },
              ],
            },
            {
              field: 'journalproperty',
              input: [
                {
                  type: 'dimVal',
                  name: 'year',
                  ref: 'Year',
                },
                {
                  type: 'dimVal',
                  name: 'volume',
                  ref: 'Volume',
                },
                {
                  type: 'dimVal',
                  name: 'issue',
                  ref: 'Issue',
                },
                {
                  type: 'prop',
                  name: 'complete',
                  ref: 'issuecomplete',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'summary',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'books',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Series',
                },
                {
                  type: 'dimVal',
                  name: 'value',
                  ref: 'Series',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'book_series_volume',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Volume',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_reviewdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Last reviewed',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_publishdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Published online',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'category',
                },
              ],
            },
          ],
        },
        {
          name: 'ifacahier',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sort_title', 'ALPHA'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'search_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'category',
                },
              ],
            },
          ],
        },
        {
          name: 'ecj',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commoncountry',
              input: [
                {
                  type: 'prop',
                  name: 'name',
                  ref: 'global_jurisdictions',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_decision_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Decision date',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: '',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_court',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'chunk_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'dcl',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_decision_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Decision date',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: '',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_court',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'chunk_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'cl',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commoncountry',
              input: [
                {
                  type: 'prop',
                  name: 'name',
                  ref: 'global_jurisdictions',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_decision_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Decision date',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'chunk_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'ttcls',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_decision_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Decision date',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: '',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_court',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Treaty Article',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_treaty_art_par',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'OECD Article',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_oecd_art_par',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'chunk_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'oecd',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Date',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'ibfd-published',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'ifrs',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_reviewdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Last reviewed',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'ps_evd',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_signdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Signed',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_effectdate1',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Effective Date',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_decision_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Decision Date',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'sort_year',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'ALPHA'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'eulaw',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_signdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Signed',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_effectdate1',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Effective Date',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_decision_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Decision Date',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'sort_year',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'eudir',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_signdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Signed',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_effectdate1',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Effective Date',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_decision_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Decision Date',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'sort_year',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'eucomdec',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_signdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Signed',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_effectdate1',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Effective Date',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_decision_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Decision Date',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'sort_year',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'vatdir',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_signdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Signed',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_effectdate1',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Effective',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'ps',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: '',
                },
                {
                  type: 'dimVal',
                  name: 'value',
                  ref: 'Issuing Authority',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_signdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Issued',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Document number',
                },
                {
                  type: 'dimVal',
                  name: 'value',
                  ref: 'Document Number',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'irs',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: '',
                },
                {
                  type: 'dimVal',
                  name: 'value',
                  ref: 'Country',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: '',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_year',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'ibfd-published',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Published online',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'irsdocs',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: '',
                },
                {
                  type: 'dimVal',
                  name: 'value',
                  ref: 'Country',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'ibfd-published',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Published online',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'cncirc',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: '',
                },
                {
                  type: 'dimVal',
                  name: 'value',
                  ref: 'Issuing Authority',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_signdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Issued',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Document number',
                },
                {
                  type: 'dimVal',
                  name: 'value',
                  ref: 'Document Number',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'treaty',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Signed',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_signdate',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Status',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_status',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'In Force',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_inforcedate',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Effective',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_effectdate1',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Termination',
                },
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'global_terminationdate',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'MLI Treaty Status',
                },
                {
                  type: 'dimVal',
                  name: 'value',
                  ref: 'MLI Matching',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'models',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_publishdate',
                },
              ],
            },
            {
              field: 'other-lang-versions',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'docid',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'tables',
          fields: [
            {
              field: 'titlelink',
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'search_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'review_date',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Last reviewed',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'chapters',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_reviewdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Last reviewed',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'topics',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commonproperty',
              input: [
                {
                  type: 'prop',
                  name: 'value',
                  ref: 'p_content_author_list',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Author',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_reviewdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Last reviewed',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
        {
          name: 'topics_no_author',
          fields: [
            {
              field: 'aggrtitlelink',
              input: [
                {
                  type: 'prop',
                  name: 'docid',
                  ref: 'global_link',
                },
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'global_title',
                },
              ],
            },
            {
              field: 'commondate',
              input: [
                {
                  type: 'prop',
                  name: 'date',
                  ref: 'global_reviewdate',
                },
                {
                  type: 'literal',
                  name: 'label',
                  ref: 'Last reviewed',
                },
              ],
            },
            {
              field: 'titlelink',
              aggr: true,
              sort: ['sortorder', 'NUM'],
              input: [
                {
                  type: 'prop',
                  name: 'path',
                  ref: 'relative_path',
                },
                {
                  type: 'prop',
                  name: 'title',
                  ref: 'short_title',
                },
              ],
            },
            {
              field: 'collection',
              input: [
                {
                  type: 'dimVal',
                  name: 'name',
                  ref: 'subcategory',
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
