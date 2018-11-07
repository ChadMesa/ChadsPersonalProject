using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using DbAccess1.DbAdapter;


namespace FundamentalsReact.Services
{
    public class BaseService
    {
        public DbAdapter Adapter
        {
            get
            {
                return new DbAdapter(new SqlCommand(),
                    new SqlConnection("Server = localhost\\sqlexpress; Database = Personal_Project; Trusted_Connection = True"));
            }
        }
    }
}