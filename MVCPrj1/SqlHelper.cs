using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;

namespace MVCPrj1
{
    public class SqlHelper
    {
        private SqlConnection con;

        public SqlHelper()
        {

            // TODO: 在這裡新增建構函式邏輯
            //
            con = new SqlConnection(GetSqlConnection());
            //open();
        }

        void open()
        {
            con.Open();
        }

        public string GetSqlConnection()
        {
            string constr = WebConfigurationManager.ConnectionStrings["con1"].ConnectionString;
            return constr;
        }

        public string sql2result(string sql)
        {
            string r = "";
            SqlDataAdapter da = new SqlDataAdapter(sql, con);
            DataTable tb = new DataTable();

            try
            {
                con.ConnectionString = this.GetSqlConnection();
                con.Open();
                da.Fill(tb);
            }
            finally
            {
                con.Close();
            }

            if (tb.Rows.Count > 0)
            {
                r = tb.Rows[0][0].ToString();
            }
            return r;
        }

        public DataTable Sql2Table(String sql)
        {
            SqlDataAdapter da = new SqlDataAdapter(sql, con);
            DataTable tb = new DataTable();
            try
            {
                con.Open();
                da.Fill(tb);

            }
            finally
            {
                con.Close();
            }
            return tb;
        }

        public int execsql(string sql)
        {
            int ir = 0;
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = this.con;
            cmd.CommandText = sql;
            try
            {
                con.ConnectionString = this.GetSqlConnection();
                con.Open();
                ir = cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                con.Close();
            }
            return ir;
        }

    }
}