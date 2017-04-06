	function createRemark(id,phone,content){
		var oMain=document.getElementById("main");
		var pDiv=document.createElement("div");
		pDiv.className="remark";
		pDiv.innerHTML='<img src="images/remarkicon.jpg" class="img-responsive">';
		var child1=document.createElement("div");
		child1.innerHTML="<span>"+id+"  <em>"+phone+"</em></span><p>"+content+"</p>";
		pDiv.appendChild(child1);
		oMain.appendChild(pDiv);			
	}
	window.onload=function(){
		var oBtn=document.getElementById("remarkBtn");		
		var oPanel=document.getElementById("panel");
		var oClose=oPanel.getElementsByTagName("span")[0];
		var oContainer=document.getElementById("container");
		var oText=document.getElementsByTagName('textarea')[0];
		var oBtn2=document.getElementById("postBtn");
		oText.value2=oText.value;
		oText.onfocus=function(){
			if(this.value==this.value2)
			{
				this.value="";
			}
		}
		oText.onblur=function(){
			if(this.value=="")
			{
				oText.value=this.value2;	
			}
		}
		aInput=oPanel.getElementsByTagName('input');
		for(var i=0;i<aInput.length;i++)
			{
				aInput[i].value2=aInput[i].value;
				aInput[i].onfocus=function(){
					if(this.value==this.value2)
					{
						this.value="";
					}				
				}
				aInput[i].onblur=function(){
					if(this.value=='')
					{
					this.value=this.value2;
					}
					
				}
			}
		oPanel.style.display='none';
		oBtn.onclick=function(){
			oContainer.style.opacity="0.7";
			oPanel.style.display='block';
		}
		oClose.onclick=function(){
			oPanel.style.display='none';
			oContainer.style.opacity="1";

		}
		oBtn2.onclick=function(){
			var id=aInput[0].value;
			var phone=aInput[1].value;
			var content=oText.value;
			if(id!='昵称'&&phone!='手机号'&&content!='内容')
			{
				createRemark(id,phone,content);
				oPanel.style.display='none';
			}			
			
		}
	}