���Ľ�ʱ�������DB�Ǵ��,��ȷ����TODO:����ľۼ������һ��ǲ�̫���
------------------------------------------------------
use AppsDB
go
 
CREATE TABLE [dbo].[SysSample](
    [Id] [varchar](50) NOT NULL,
    [Name] [varchar](50) NULL,
    [Age] [int] NULL,
    [Bir] [datetime] NULL,
    [Photo] [varchar](50) NULL,
    [Note] [text] NULL,
    [CreateTime] [datetime] NULL,
 CONSTRAINT [PK__SysSampl__3214EC075AEE82B9] PRIMARY KEY CLUSTERED
(
    [Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
 
GO
------------------------------------------------------
���Ľ�ʱ�����õļܹ�ûӴDALFactory������ʵDAL��UI�㲢û����ȫ����,����UI�͵��������еĲ�,���ǲ���OA��DALFactory������Ͽ��������,�������ܹ��ľ���.������BLLҲ��������DAL�Ŀ��Ǵ��ǲ��͵�Ҳ������,���Ի��ǲ���.
------------------------------------------------------
���������DAL����db.Set<entity>().Attach(entity);�Ǵ��Ҫ�ĳ�db.SysSample.Attach(entity);
���������DAL��GetList���������˼·�ǰ�DBContext����ÿ��������,Ȼ��ͨ��db.����ÿ��ʵ�����,���ظ�BLL��,�����з�ҳ.
����OAʹ�õ��Ǵ���һ��Lambda���ʽ,ֱ��Db.Set<T>().Where<T>(whereLambda).
������ɾ�ĵ�˼·����һ����,���Ǵ���ʵ��,entityȻ����ϱ��,Ȼ��db.SaveChanges();
���������������˵web��Ҳ������EF����ֱ����BLL��DAL�����EF,������ʾ��ַ,Ȼ����Web������,ֱ��BrowseȻ��ѵ�ַcopy��ȥ.�ҵ�dll���þ�����,������֤�汾��һ�µ�.

�����סҪ�ʹ���OAһ��,�������ַ�ת���ô�Model��copy��web.config��ȥ.
��BLL��IBLL��IDAL��DAL����EntityFramework
��Apps.Web����EntityFramework��EntityFramework.SqlServer
������Web.config����������EF������
<configuration>
  <configSections>
    <!-- For more information on Entity Framework configuration, visit http://go.microsoft.com/fwlink/?LinkID=237468 -->
    <section name="entityFramework" type="System.Data.Entity.Internal.ConfigFile.EntityFrameworkSection, EntityFramework, Version=6.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" requirePermission="false" />
  </configSections>
  <entityFramework>
    <defaultConnectionFactory type="System.Data.Entity.Infrastructure.LocalDbConnectionFactory, EntityFramework">
      <parameters>
        <parameter value="mssqllocaldb" />
      </parameters>
    </defaultConnectionFactory>
    <providers>
      <provider invariantName="System.Data.SqlClient" type="System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer" />
    </providers>
  </entityFramework>

DBConnection:
<connectionStrings>
  <!--<add name="XGYWeixin" connectionString="Data Source=localhost;Initial Catalog=xgyWeiXin;Integrated Security=False;Persist Security Info=False;User ID=sa;Password=1q2w3e4R" providerName="System.Data.SqlClient" />-->
  <add name="DBContainer" connectionString="data source=DESKTOP-I44UEH2;initial catalog=AppsDB;user id=sa;password=sa;MultipleActiveResultSets=True;App=EntityFramework" providerName="System.Data.SqlClient" />
</connectionStrings>
-----------------------------------------------------
������ Unity����ע��
���IoC��DI,�ο��������Ͽ��������ƪ����. ��ʵ�������һ��ģ����Ҫ������ģ���������,��ô���ģ���������.˵ע����ʵ�е�߶�,�������ɴ���.
���캯��ע�������ע�����дһ�����캯��ע�����дһ�����԰�����ע�������???����һ����������Ҫ���캯����ʱ��ѹ��캯��ע��,��Ҫע�����Ե�ʱ�������ע��.����:��ϵͳ��ʼ����ʱ�����ǾͰѹ��캯��ע�롣��������Ҫ��Global�ļ�д�����
ͨ�����캯����������(����д���캯����)��IOC��������ģ��.����ʱע����ǳ���һ����,�Ͱ���������ȥ��,�����õ�ʱ���ٴ�.
��Ҫ��������������RegisterType��Resolve
Unity�°�ĺ������õ��ļ���һ����.���������.using Microsoft.Practices.Unity;����ǻ�����4.01���ñȽ��ȶ�.
UnityDependencyResolver��Ҫ�������using System.Web.Mvc;,��web���ҵ�,Ȼ��copy������ַ,����ļ��в�����VSֱ�ӽ�ȥ����,�Ͱ�dll�ʼ�copy����,�ӱ����ý�ȥ��.
@model�ǰ���ͼ���ǿ������ͼ,@Html.DisplayFor(modelItem => item.Name)��modelitem��lambda���ʽ�Ĳ���,Ӧ����item��,����foreachѭ����ʱ���Ѿ��������,����������.������һ��û�õĲ����������.
����EF���ɵ�ʵ��ģ����ӵ������״̬�ģ�������ҪΪSysSample�����ٴζ����ģ�ͣ�SysSampleModel�����ģ�����ǿ��Լ����ԣ����л�����������.�ʹ���OAһ��,��ΪEFģ���Ǳ���һ�ξ����������˵�,���Բ���ȫ,���ǲ�ȡ�İ취�Ǹ�T4ģ��,�����������ٱ���ļ�����������һ��ģ��.�������ܱ�֤��ȫ.
-----------------------------------------------------
���߽�MVC��EasyUI DataGrid
linq���ʽ��lambda���ʽ��ת��,Linq���ʽ�������ֱ��ʵ������,תjson��ʱ����Ҫnew,��lambda���ʽ��ʱ��תjsonҲ��new.TODO:������ܾ���linq to object����new
//rows = listֱ�������Ϳ���,������Ϊʲô���صľ��Ǹ�list��Ҫ��controller�ڽ�һ��,�ڸ�ֵһ��
-----------------------------------------------------
�ڰ˽�MVC��EasyUI DataGrid ��ҳ
��װ��Common���pager�����ռ���app����apps
���ϵͳ�ǰ����ݶ�ȡ����,Ȼ����BLL���ҳ,����OA��ֱ��ȡҳ������,���ϵͳ���Ĳ���.
��ϵͳĿǰ����û��Dbcontext���߳���Ψһ,Ŀǰ��ѯ��û����,�����޸ĵ�ʱ��Ӧ�õ���.������ϸ����һ��,��DAL�õ���using(var dbcontext = new dbcontext),��������֮��,dbcontext�ͱ��ͷ���,���Բ���дdbcontextFactory����dbcontextʵ����.ȱ�������Ϊ����ͱ��ͷ�,����ʹ���ӳټ��ػ���
------------------------------------------------------
�ھŽ�MVC��EasyUI�����ɾ�Ĳ�

