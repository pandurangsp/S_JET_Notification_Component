# Custom Component for Notifications &lt;cc-notification-bell/&gt;
A custom component which serves the purpose of displaying a UI control, displayed as bell. The bell has a notification count balloon, displaying the number of active notifications

<h2>The View</h2>
<h3><u>How easy is it to use?</u></h3>
      &lt;cc-notification-bell id="notfctnComp" 
        notfctn-obj="[[notificationObj]]" 
        on-clear-notifications="[[clearAllNotfctns]]" 
        on-clear-single-notification="[[clearSingleNotification]]"&gt;
      &lt;/cc-notification-bell&gt;

<h3>Attributes and their use</h3>
      <ul>
      <li><h4>on-clear-notifications</h4>
      This is an event which is raised/dispatched from the Custom Component. 
      This event, as the name itself says, clears or deletes all notifications in the list
      This event will be caught and handled by suitable method in the View Model</li>
      <li> <h4>notfctn-obj</h4>
      This holds the information that will be passed to the custom component. </li>
      <li><h4>on-clear-single-notification</h4>
      This is an event which is raised/dispatched from the Custom Component. 
      This event, as the name itself says, clears or deletes the selected notification in the list
      This event will be caught and handled by suitable method in the View Model</li>
      </ul>
      
         
<h2>The View Model: Preparing the data & logic, for the above attributes</h2>
     
  <p>Rather than going through the code, line-by-line, let us understand the logic</p>
  <p>Signals play a very important role. They enable a two-way communication between the 2 parties here. The parties being the custom component and the parent page (referred as PP going ahead), where this custom component is placed upon</p>
  <p> The Custom Component (referred as CC going ahead), is a UI control, which provides both, the Data Display and Behavior.</p>
  <p>Data Display includes, displaying the notifications. This includes two things. One, show the total count of notifications and showing the notifications in a list</p>
  <p>The source of notifications, source is nothing but from where these notifications originate, are external to the CC. This means, the notifications come from the PP and are consumed by CC. Thus we follow a <b><i>pub-sub</i></b> pattern here</p>
  <p>Here, for the purpose of demo, we see three oj-buttons on the PP. When user clicks any one of them, a notification gets created and added to the list. Each time a new notification gets added, the CC is made aware of this change by sending the updated list of notifications. As we read about Signals above, they help in letting the CC know about this change.</p>
  <p>Also, CC can manage these notifications. Management tasks include, showing and deleting the notifications. User can delete a single or all notifications at once. Updating the notification list happens only at the PP. This is because CC is not the source of the notifications. Notifications are generated and stored only at the PP side, and any deletion by the CC, should affect the list persisted at the PP. This way of communication, form CC to PP, happens only by events which are triggered or dispatched from the CC</p>
          
