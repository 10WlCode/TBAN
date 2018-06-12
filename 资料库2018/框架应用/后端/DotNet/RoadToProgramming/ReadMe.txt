第四节时候给出的DB是错的,正确的是TODO:这里的聚集索引我还是不太理解
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
第四节时候他用的架构没哟DALFactory这样其实DAL和UI层并没有完全解耦,这样UI就得引用所有的层,传智播客OA有DALFactory结合资料库里的文章,理解三层架构的精髓.理论上BLL也不用引用DAL的可是传智播客的也得引用,所以还是不懂.
------------------------------------------------------
第五节里面DAL层里db.Set<entity>().Attach(entity);是错的要改成db.SysSample.Attach(entity);
第五节里面DAL层GetList方法的设计思路是把DBContext传进每个函数里,然后通过db.出来每个实体对象,返回给BLL层,不进行分页.
传智OA使用的是传入一个Lambda表达式,直接Db.Set<T>().Where<T>(whereLambda).
其它增删改的思路都是一样的,都是传入实体,entity然后打上标记,然后db.SaveChanges();
第五节文章里忘记说web层也得引用EF可以直接找BLL和DAL层理的EF,他会显示地址,然后在Web层引用,直接Browse然后把地址copy上去.找到dll引用就行了,这样保证版本是一致的.

必须记住要和传智OA一样,把链接字符转配置从Model层copy到web.config上去.
在BLL、IBLL、IDAL、DAL引用EntityFramework
在Apps.Web引用EntityFramework和EntityFramework.SqlServer
并且在Web.config中重新配置EF的引用
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
第六节 Unity依赖注入
理解IoC和DI,参考本地资料库里蟋蟀的两篇文章. 其实就是如果一个模块需要其他的模块才能运行,那么这个模块就是依赖.说注入其实有点高端,可以理解成传入.
构造函数注入和属性注入就是写一个构造函数注入或者写一个属性把依赖注入的区别???还有一种理解就是需要构造函数的时候把构造函数注入,需要注入属性的时候把属性注入.比如:在系统开始运行时候我们就把构造函数注入。所以我们要在Global文件写入代码
通过构造函数或者属性(不用写构造函数了)把IOC容器传入模块.运行时注入就是程序一运行,就把依赖传进去了,不是用的时候再传.
主要的两个方法就是RegisterType和Resolve
Unity新版的好像引用的文件不一样了.不是这个了.using Microsoft.Practices.Unity;最后还是换回了4.01觉得比较稳定.
UnityDependencyResolver需要添加引用using System.Web.Mvc;,从web层找到,然后copy下来地址,这个文件夹不能用VS直接进去引用,就把dll问价copy下来,从别处引用进去吧.
@model是把视图编程强类型视图,@Html.DisplayFor(modelItem => item.Name)中modelitem是lambda表达式的参数,应该用item的,但在foreach循环的时候已经定义过了,不能再声明.就声明一个没用的参数放在左边.
由于EF生成的实体模型是拥有事务状态的，我们需要为SysSample的类再次定义个模型，SysSampleModel，这个模型我们可以加属性，序列化、脱离事物.和传智OA一样,因为EF模型是保存一次就重新生成了的,所以不安全,传智采取的办法是改T4模板,这里是重新再别的文件夹生成另外一个模型.这样才能保证安全.
-----------------------------------------------------
第七节MVC与EasyUI DataGrid
linq表达式和lambda表达式的转换,Linq表达式里面可以直接实例化类,转json的时候需要new,用lambda表达式的时候转json也得new.TODO:这个可能就是linq to object都得new
//rows = list直接这样就可以,不明白为什么返回的就是个list还要在controller在接一遍,在赋值一次
-----------------------------------------------------
第八节MVC与EasyUI DataGrid 分页
封装在Common里的pager命名空间是app不是apps
这个系统是把数据都取出来,然后在BLL层分页,传智OA是直接取页面数据,这个系统做的不好.
本系统目前好像没做Dbcontext的线程中唯一,目前查询是没问题,但是修改的时候应该得做.后来仔细看了一下,在DAL用的是using(var dbcontext = new dbcontext),这样用完之后,dbcontext就被释放了,所以不用写dbcontextFactory创建dbcontext实例了.缺点就是因为用完就被释放,不能使用延迟加载机制
------------------------------------------------------
第九节MVC与EasyUI结合增删改查

